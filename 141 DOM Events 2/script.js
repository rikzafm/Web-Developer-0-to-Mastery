var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("UL");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("listWrapper");
	li.appendChild(document.createTextNode(input.value));
	delButton.appendChild(document.createTextNode("X"));
	div.append(li, delButton);
	ul.append(div);
	
	input.value = "";
	delButton.classList.add("deleteButton");

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

function done(event) {
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
}

function delClick(e) {
	if(e.target.className === "deleteButton"){
		e.target.parentElement.remove();
	}
}

function clickList(element){
	done(element);
	delClick(element);
}

ul.addEventListener("click", clickList)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);