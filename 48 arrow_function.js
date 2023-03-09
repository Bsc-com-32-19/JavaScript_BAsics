// arrow function compact alternative to a tradition function.

// =>

let grades = [100, 20, 50, 70, 89];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));