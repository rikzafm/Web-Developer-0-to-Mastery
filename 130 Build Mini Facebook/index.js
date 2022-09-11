var database = [
    {
        username : "andrei",
        password : "supersecret"
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
    }
];

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!")
        }
}

signIn(userNamePrompt, passwordPrompt);

console.log("Test");