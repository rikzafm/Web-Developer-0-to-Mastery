function isUserValid(bool) {
    return bool;
}

//Tertiary Condition
// condition ? if true : if flase;
var answer = isUserValid(true) ? "You may enter" : "Access Denied";
var answer2 = isUserValid(false) ? "You may enter" : "Access Denied";

console.log(answer);
console.log(answer2);

function moveCommand(direction){
    var whatHappened;
    switch(direction){
        case "forward":
            whatHappened = "you may encountered pikachu";
            break;
        case "back":
            whatHappened = "you crashed";
            break;    
        case "right":
            whatHappened = "you found a river";
            break;
        case "left" : 
            whatHappened = "You home";
            break;
        default: 
            whatHappened = "Please input a valid direction"
    }
}