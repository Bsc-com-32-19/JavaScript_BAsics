// spread operator allows an iterable such 
// ... as an array or string to be
//     expanded in places whee zero or more arguments are expected
//    (unpacks the elemnts)

let userName = "Mirriam Yambeni";
let numbers = [1, 2, 3, 4, 5,10, 6, 7, 8, 9];

// to find maximum value
let maximum = Math.max(...numbers);
console.log(maximum);
console.log(...numbers);
console.log(...userName);

let class1 = ["cat","mouse", "dog"];
let class2 = ["olie", "Bea", "manny"];

class1.push(...class2);
console.log(...class1);



