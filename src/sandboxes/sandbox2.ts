// inference:

let character = "mario";

let age = 30;

let isBlackBelt = false;

// can change the value just not the type:

// character = 42; // error
character = "luigi";

// age = "yoshi"; // error
age = 33;

// isBlackBelt = "yes"; // error
isBlackBelt = true;

// define the type of the parameter
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// Error - "hello" is not a number:
// console.log(circ("hello"));

console.log(circ(7.5));
