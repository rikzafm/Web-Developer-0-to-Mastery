// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("CLICK!!!!")
// })

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function createListElement(){
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick(){
    if(input.value.length > 0 ){
        createListElement();
    }
}

function addListAfterKeypress(){
    if(input.value.length > 0 && event.which ===13){
        var li = document.createElement("li");
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);