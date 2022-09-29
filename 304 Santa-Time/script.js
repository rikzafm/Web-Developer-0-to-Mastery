const { time } = require('console');
const fs = require('fs');

//1 - What floor does Santa end up in?
// ( -- go up by one floor
// ) -- go down one floor

function q1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q1');
        const direction = data.toString();
        const directionArray = direction.split('');
        const answer = directionArray.reduce((acc, currentItem) =>{
            if(currentItem === '(') {
                return acc += 1;
            } else if (currentItem === ')') {
                return acc -= 1;
            } 
        }, 0)
        console.timeEnd('q1');
        console.log(`Santa is at floor: ${answer}`);
    })
}



// 2. When does Santa first enter the basement

function q2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q2');
        const direction = data.toString();
        const directionArray = direction.split('');
        let acc = 0;
        let counter = 0;
        const answer = directionArray.some((currentItem) => {
            if (currentItem === '(') {
                acc += 1;
            } else if (currentItem === ')') {
                acc -= 1;
            }
            counter++;
            return acc < 0;
        });
        console.timeEnd('q2');
        console.log(`Entered basement at ${counter} counter`);
    })
}

q1();
q2();