// explicit types

// define types within a variable
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// errors
// age = "luigi";

// age = 30;

// error
// isLoggedIn = 25;

// isLoggedIn = true;

// arrays

// sometimes we want to initialize with an empty array - so we can push to it;

// let ninjas: string[] = [];

// ninjas.push("david");

// union types

// let mixed: (string | number | boolean)[] = [];

// mixed.push("hello");
// mixed.push(42);
// mixed.push(false);
// console.log(mixed);

// let uid: string | number;
// uid = 123;
// uid = "123";

// objects

// want to be more specific as this could be assign as an array as well:
// let ninjaOne: object;

// ninjaOne = { name: "david", age: 36 };

// ninjaOne = [];

// Assing the object variable with structure of types

// let ninjaTwo: {
//   name: string;
//   age: number;
//   beltColour: string;
// };

// the object needs to retain the same structure as above:
// ninjaTwo = { name: "Kim", age: 39, beltColour: "black" };
