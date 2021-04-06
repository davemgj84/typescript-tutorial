import { Invoice } from "./classes/Invoice.js";
const me = {
    name: "David",
    age: 36,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent ", amount);
        return amount;
    },
};
let someone;
console.log(me);
const invOne = new Invoice("David", "artwork on the website", 42);
const invTwo = new Invoice("Kim", "artwork on the website", 42);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.format());
});
const form = document.querySelector(".new-item-form");
// Inputs:
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
