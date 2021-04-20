"use strict";
// arrays
let names = ["luigi", "mario", "yoshi"];
names.push("toad");
// errors
// names.push(3);
// name[0] = 3;
// name = "hello";
let numbers = [10, 20, 30, 40];
numbers.push(50);
// errors:
// numbers.push("david");
// numbers[1] = "david";
// mixed string or numbers:
let mix = ["david", 42, "kim", 8, 33];
// can either string or number or change values to string or number
mix.push("sarah");
mix.push(6);
mix[0] = 3;
// objects
// values within object have to remain same as declared type:
let ninja = {
    name: "mario",
    belt: "black",
    age: 30, // number
};
ninja.age = 42;
ninja.name = "david";
// errors
// ninja.age = "30";
// cant add new keys - has to have same structure
// ninja.skills = ["fighting", "sneaking"];
// cleaner more predictable code :)
