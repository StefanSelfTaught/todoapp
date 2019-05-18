var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll('li');
var remove = document.getElementsByClassName('delete');

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

for (let i = 0; i < remove.length; i++) {
	remove[i].addEventListener('click', removeLi);
}

function removeLi(){
	this.parentElement.remove();
}

li.forEach(element => {
	element.addEventListener('click', addDone);
});

function addDone(){
	this.classList.toggle('done');
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var newli = document.createElement("li");
	newli.appendChild(document.createTextNode(input.value));
	newli.addEventListener('click', addDone);
	var removeForLi = document.createElement("button");
	var node = document.createTextNode("Delete");
	removeForLi.appendChild(node);
	removeForLi.classList.add('delete');
	removeForLi.addEventListener('click', removeLi);
	newli.insertBefore(removeForLi, newli.childNodes[1]);
	ul.appendChild(newli);
	input.value = "";
	input.focus();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



