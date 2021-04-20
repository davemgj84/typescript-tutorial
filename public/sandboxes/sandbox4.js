"use strict";
// explicit types
// define types within a variable
let individual;
let yearsOld;
let isLoggedIn;
// errors
// yearsOld = "luigi";
yearsOld = 30;
// error
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
// sometimes we want to initialize with an empty array - so we can push to it;
let ninjas = [];
ninjas.push("david");
// union types
let mixed = [];
mixed.push("hello");
mixed.push(42);
mixed.push(false);
console.log(mixed);
let uid;
uid = 123;
uid = "123";
// objects
// want to be more specific as this could be assign as an array as well:
let ninjaOne;
ninjaOne = { name: "david", yearsOld: 36 };
ninjaOne = [];
// Assing the object variable with structure of types
let ninjaTwo;
// the object needs to retain the same structure as above:
ninjaTwo = { name: "Kim", yearsOld: 39, beltColour: "black" };
