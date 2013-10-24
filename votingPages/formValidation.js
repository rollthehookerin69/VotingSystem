function validateCheckableForm() {
	var candidates=document.getElementsByName("votingOption");
	var selected = false;
	for (var i=0;i<candidates.length;i++)
	{ 
		if(candidates[i].checked) {
			selected = true;
			break;
		}
	}
	if(selected == false) {
		alert("You must make a selection before you can vote!!");
	}
	return selected;
}

function validateWriteInForm() {
	var candidates=document.getElementsByName("votingOption");
	var selected = false;
	for (var i=0;i<candidates.length;i++)
	{ 
		if(candidates[i].value != "") {
			selected = true;
			break;
		}
	}
	if(selected == false) {
		alert("You must make a selection before you can vote!!");
	}
	return selected;
}

function validateCheckAndWriteInForm() {
	var candidates=document.getElementsByName("votingOption");
	var selected = false;
	var errorMessage = "You must make a selection before you can vote!!";
	for (var i=0;i<candidates.length;i++)
	{
		if(candidates[i].id.indexOf("writeIn") != -1 && candidates[i].checked) {
			var textBox = document.getElementById(candidates[i].id.concat("Text"));
			if(textBox.value == "") {
				selected = false;
				errorMessage = "You must enter somthing in the write in box to submit your vote.";
				break;
			} else {
				selected = true;
			}
		} else if(candidates[i].checked) {
			selected = true;
			break;
		}
	}
	if(selected == false) {
		alert(errorMessage);
	}
	return selected;
}