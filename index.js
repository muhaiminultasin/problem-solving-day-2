
// 1.



let person = {
    name: "John",
    age: 20,
};

let {name,age} = person;
console.log(name, age);


// 2. this is comment out because of encountering an error.

// import { calculateArea } from "./anotherfile.js";

// console.log(calculateArea(5));

// 3.

class Rectangle {
    constructor (width,height){
        this.width = 200;
        this.height = 300;


    }

    calculateArea2(){
        return this.width * this.height;
    }
}


let myRec = new Rectangle(10*20)
let myArea = myRec.calculateArea2();
// console.log(myArea);


// 4.



// 5. 

class Circle {
    constructor (radius) {
        this.radius = radius;


    }

    calculateArea2(){
        return 2 * Math.PI * this.radius;
    }
}


let myRec2 = new Circle(10)
let myArea2 = myRec.calculateArea2();
console.log(myArea2)