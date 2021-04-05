// explicit types:
var character;
var age;
var isLoggedIn;
// arrays
var hobos = [];
hobos.push("david");
// union types
// could be 1 of 2 or 1 of 3 types
var mixed = [];
mixed.push("hello");
mixed.push(false);
mixed.push(42);
console.log(mixed);
var uid;
uid = 42;
uid = "42";
// objects
var ninjaOne;
ninjaOne = {
    name: "david",
    age: "42"
};
var ninjaTwo;
ninjaTwo = {
    name: "david",
    age: 42,
    beltColour: "black"
};
// setup console to watch changes in this file to compile into JS:
// tsc sandbox.ts -w
