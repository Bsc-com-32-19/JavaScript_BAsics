//slice() method extracts a section of a string and 
//returns it as a newstring, 
// without modifying the original string.

let fullName = "Mirriam Yambeni";
let firstName;
let lastName;

// firstName = fullName.slice(0, 7);
// lastName = fullName.slice(7);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" " ) + 1);

console.log(firstName);
console.log(lastName);