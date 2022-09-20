// const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, '4', '4', '3', '2', '2'];

const cleanRoom = (array) => {
    array.sort((a, b) => {
        return a - b;
    })

    const newArray = [];
    let temp = [];

    array.forEach((element, index) => {

        let lastNum = array[index-1];
        let nextNum = array[index+1];

        if (element === lastNum || element === nextNum){
            if(element != nextNum || typeof element != typeof nextNum){
                temp.push(element);
                newArray.push(temp);
                temp = [];
            }else{
                temp.push(element);
            }
            
        } 
        else {
            if(temp.length > 0){
                newArray.push(temp);
                temp = [];
            }

            newArray.push(element);
        }
    });
    return newArray;
};

cleanRoom(array);