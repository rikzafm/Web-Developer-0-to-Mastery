
//OLD JAVASCRIPT
function first() {
    var greet ='Hi';
    function second() {
        alert(greet);
    }
    return second; 
}

var newFunc = first();
newFunc();

//MODERN JAVASCRIPT
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a* b;

const multiplyBy5 = curriedMultiply(5);

multiplyBy5(5); //Output: 25
multiplyBy5(2); //Output: 10
multiplyBy5(12); //Output : 60