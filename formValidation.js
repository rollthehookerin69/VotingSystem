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