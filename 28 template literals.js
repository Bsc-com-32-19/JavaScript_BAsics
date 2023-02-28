// template literals delimited with(') 
//instead of double or single quotes 
//allows embedded variables and expression

let userName = "Mirriam";
let items = 4;
let total = 5000;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart");
// console.log("Your toatal is $", total);

console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your toatal is $${total}`);

// single text
let text = `Hello ${userName}<br>
You have ${items} items in your cart<br>
Your toatal is $${total}`;

// console.log(text);

document.getElementById("myLabel").innerHTML = text;
