// any types:
// Kind of reverts this to basic Javascript - be careful when using any types:

let aged: any = 25;

aged = 33;
console.log(aged);

aged = "david";
console.log(aged);

aged = true;
console.log(aged);

aged = { name: "david" };
console.log(aged);

let mixes: any[] = [];

mixes.push(5);
mixes.push("david");
mixes.push(false);

console.log(mixes);

// values can be swapped - can see how mistakes can be made in the future - careful with any types:

let ronin: { name: any; aged: any };

ronin = { name: "yoshi", aged: 33 };
console.log(ronin);

ronin = { name: 25, aged: "mario" };
console.log(ronin);
