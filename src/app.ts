import { Invoice } from "./classes/Invoice.js";

// interfaces:

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "David",
  age: 36,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent ", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log(`Hello ${person.name}`);
};

greetPerson(me);

const invOne = new Invoice("David", "artwork on the website", 42);
const invTwo = new Invoice("Kim", "artwork on the website", 42);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.format());
});

// Interacting with the DOM with Typescript

// Type casting by adding ' as HTMLFormElement '
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs:
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
