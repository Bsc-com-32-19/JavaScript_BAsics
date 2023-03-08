// forEach array() executes a provided callback
// function once foe each array element

let students = ["mary", "lucy", "chris"];

students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring([1]);


}
function print(element){
    console.log(element);
}
// console.log(students[0]);