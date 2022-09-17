var h3 = document.querySelector("h3"); 
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var background = document.getElementById("gradient");
var button = document.getElementById("randButton");

// var colorValue = color1.value;
// var colorValue2 = color2.value;

function colorGradient(colorValue, colorValue2){
   let temp = "linear-gradient(to right, "
    + colorValue + ", "
    + colorValue2 + ")";

    background.style.background = temp;
    button.style.background = temp;
    h3.textContent = temp + ";";
}

function randomColor() {
    let temp = Math.floor(Math.random()*16777215).toString(16);
    return "#" + temp;
}

function randomGradient() {
    colorGradient(randomColor(), randomColor());
}

function pickGradient(){
    colorGradient(color1.value, color2.value);
}

pickGradient();
color1.addEventListener("input", pickGradient);
color2.addEventListener("input", pickGradient);
button.addEventListener("click", randomGradient);
