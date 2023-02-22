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

/* Arithmetic expression is a combination of ....
   operands (values,variables,etc)
   operands (+, -, *, /, %)
   that csn be evaluated to avalue 
   example,y = x + 5;
*/
let students = 20;

 students = students + 1;
  students = students - 1;
  students = students / 2;
  students = students * 2;
 
  console.log(students)
 
 let extraSteundents = students % 3;
 console.log(extraSteundents)

 // augumented operator
 students += 1;
 students -= 1;
 students /= 2;
 students *= 2;

 console.log(students)
 /* operator precedence
 1.parenthseis()
 2.exponents
 3.multiplication & division
 4. addition & subtraction
 */
let result = 1 + 2 * (3 + 4);
console.log(result);
let results = (1 + 2) * (3 + 4);
console.log(results);
