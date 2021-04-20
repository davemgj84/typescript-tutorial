let greet: Function;

greet = () => {
  console.log("hello, world");
};

// optional parameter c?: || default c: number = 10. default or optional params at the end

// as this function does not return anything - the value it returns is void. Not needed but add on to show
// lack of return value - when compiled will be undefined. Void is a complete lack of any value
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(42, 42, 42);

// can add the return type explicitly in the function

const minus = (a: number, b: number): number => {
  return a - b;
};

// Typescript can infer the return type - for example result has a return type of number
let result = minus(10, 7);
