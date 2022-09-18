const array = [1, 2, 10, 16];

const double = []
const newArrtay = array.forEach((num => {
    double.push(num * 2);
}))

console.log('double');

//map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log(mapArray);

//filter

const filterArray = array.filter(num => {
    return num > 5;
})

const filterArray2 = array.filter(num => num > 5);