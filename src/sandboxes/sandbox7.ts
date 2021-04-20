// Type Aliases:

// Create type aliases to limit repeated code:
type stringOrNum = string | number;
type objWithName = { name: string; uid: stringOrNum };

const logDetails = (uid: stringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const welcome = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
