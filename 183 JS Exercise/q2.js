const array = [1, 2, 3, 4, 5, 5, 3, 2, 7];

const sumOfTwo = (arr, targetSum) => {
    if(typeof arr[0] != 'number' || typeof targetSum !='number'){
        return console.log("Input Invalid. Please input number");
    }

    const newArray = [];

    arr.forEach((element, i) => {
        for(a=i+1; a < arr.length; a++){
            if(element + arr[a] === targetSum){
                newArray.push([element, arr[a]]);
                return;
            }
        }
    });
    return newArray;
};

sumOfTwo(array, 6);