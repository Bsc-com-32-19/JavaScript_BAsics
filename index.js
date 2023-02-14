console.log("I like Pizza!");
console.log("It's really good!");
//window.alert("I REALLY LOVE PIZZA!");  

// this is a comment
/*
this is a multiline comment
*/

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps to create a variable
// 1.Declaration:by using these key words(var, let, const)
// 2.Assignment (= assignment operator)

let age;
age = 22
console.log(age);

// we can combine step 1 & 2 in one line
let Age = 22; //22 is a number data type
console.log("You are",age,"years");

// string data type
let firstName = "Mirriam";
console.log("Hello",firstName);

// boolean data type
let student = true;
console.log("Enrolled:",student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old ";
document.getElementById("p3").innerHTML = "Enrolled: " + student;