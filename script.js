var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//list of li, and button
var listItems = document.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("btn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	//create elements
	var li = document.createElement("li");
	var btn = document.createElement("button")
	var btnTxt = document.createTextNode("delete");

	//add listeners
	addDeleteListener(btn);
	addDoneListener(li);

	//attach text to button
	btn.appendChild(btnTxt);

	//attach new item to list with delete button
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
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

//toggle class
function toggleDone() {
	this.classList.toggle("done");
}

//delete li
function deleteItem() {
	this.parentNode.remove();
}

//helper 
function addDoneListener(item) {
	item.addEventListener("click", toggleDone);
}

//helper
function addDeleteListener(btn) {
	btn.addEventListener("click", deleteItem);
}

// add listener to existing items
for(var i = 0; i < listItems.length; i++) {
	addDoneListener(listItems[i]);
}

// add listener to existing delete buttons
for(var i = 0; i < deleteBtns.length; i++) {
	addDeleteListener(deleteBtns[i]);
}


// --- ADDED FROM ANDREI ---
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




