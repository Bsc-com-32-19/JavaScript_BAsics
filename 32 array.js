// array think of it as a variable
// that can store multiple values

let fruits = ["apple", "orange", "banana"];

//change the list : post method
fruits[1] = "coconut"

// display one item using index
console.log(fruits[0]);

// add an element
fruits.push("lemon")

// remove last element
fruits.pop();

// add element to the beginning
fruits.unshift("mango");

// remove element from the beginning
fruits.shift();

// length of an array
let length = fruits.length;
console.log(length);

// knoe the index of element
let index = fruits.indexOf("apple");
console.log(index);

