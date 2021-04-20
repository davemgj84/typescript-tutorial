"use strict";
// let hello: Function;
// example 1
// creates the signature of the function
let hello;
// follows the signature - we dont return anything
hello = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// example 3
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
