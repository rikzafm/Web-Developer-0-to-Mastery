//Reference Type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2 //is True, they got the same reference point. If object 1 change so does object2
object1 === object3 //is False, they got different reference point. If one change, it won't affect the other.

//Contect vs Scope
const object4 = {
    a: function () {
        console.log(this);
    }
}

//Instantion
class Player {
    constructor(name, type){
        console.log(`player`, this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magician');

