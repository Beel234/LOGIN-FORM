const inputs = document.querySelectorAll(".input");


function addfocus(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remFocus(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addfocus);
	input.addEventListener("blur", remFocus);
});