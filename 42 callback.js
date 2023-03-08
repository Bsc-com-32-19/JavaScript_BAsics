/*callback is function passed as an argument to another function.
it ensures that a function is not going to run before a task is completed.
helps us to develop asynchronous code.
(when one function has to wait for another function)
that helps us avoid errors and potential problems.
example wait a file to load
*/


// let total = sum(2, 3);
// displayDOM(total);

// function sum(x, y){
//     let result = x + y;
//     return result;
// }

sum(2, 3, displayConsole);

// displays on the dom
sum(2, 3, displayDOM);


function sum(x, y, callBack){
   let result = x + y;
   callBack(result)

}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}