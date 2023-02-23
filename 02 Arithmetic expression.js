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