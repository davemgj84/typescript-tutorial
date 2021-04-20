// let hello: Function;

// example 1

// creates the signature of the function
let hello: (a: string, b: string) => void;

// follows the signature - we dont return anything
hello = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2

let calc: (a: number, b: number, c: string) => number;

calc = (num1, num2, action: string) => {
  if (action === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

// example 3

let logDetail: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetail = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
