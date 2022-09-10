// var age = prompt("What is your age?");

var checkDriverAge = function(){
    var age = prompt("What is your age?");
    if(age<18){
        alert("Your too young to drive!!!");
    } else if (age > 18) {
        alert("Go on and ride!!");
    } else if (Number(age) === 18){
        alert("Congrats on getting your driving license!");
    }
}

function checkDriverAge2 () {
    var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

// function checkDriverAge3(age){
//     if(age < 18) {
//         alert("Sorry, you are too young to drive this car, Powering off");
//     } else if (age > 18) {
//         alert("Powering on. Enjoy the ride!");
//     } else if (age === 19){
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

function checkDriverAge4(age){
    if (Number(age) < 18) {
		return "Too Young";
	} else if (Number(age) > 18) {
		return "Yup the right age";
	} else if (Number(age) === 18) {
		return "Congrats you may ride";
	}
}