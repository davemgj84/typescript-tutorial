// explicit types:

let character: string;
let age: number;
let isLoggedIn: boolean;

// arrays

let hobos: string[] = [];

hobos.push("david");

// union types
// could be 1 of 2 or 1 of 3 types

let mixed: (string | number | boolean)[] = [];

mixed.push("hello");
mixed.push(false);
mixed.push(42);

console.log(mixed);

let uid: string | number;
uid = 42;
uid = "42";

// objects

let ninjaOne: object;
ninjaOne = {
  name: "david",
  age: "42",
};

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: "david",
  age: 42,
  beltColour: "black",
};

// setup console to watch changes in this file to compile into JS:
// tsc sandbox.ts -w
