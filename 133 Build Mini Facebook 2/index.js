var database = [
    {
        username : "andrei",
        password : "supersecret"
    },
    {
        username : "alpha",
        password : "alphapass"
    },
    {
        username : "beta",
        password : "betapass"
    }
];

var newsFeed = [
    {
        username : "Bobby",
        timeline : "So Tired from all the learning"
    },
    {
        username : "Sally",
        timeline : "JS is so cool"
    },
    {
        username : "Mitch",
        timeline : "Javascript is preeety cool!"
    }
];

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
    for (let i = 0; i < database.length; i++){
        if (database[i].username === username &&
            database[i].password === password){
                return true;
        } 
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!")
        }
}

signIn(userNamePrompt, passwordPrompt);
