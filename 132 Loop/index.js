var todos = [
    "clean room",
    "brush teeth",
    "exercis",
    "study javascript",
    "eat healthy"
];

// for (let i = 0; i < todos.length; i++){
//     // console.log(todos[i] + "!");
//     todos[i] += "!";
//     console.log(todos[i]);
// }

todos.forEach (function(todo, i) {
    console.log(todo, i);
})

function logTodos (todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);

// var counterOne = 10;
// while(counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

var counterTwo = 10;
do{
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0)