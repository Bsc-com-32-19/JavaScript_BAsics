//variable scope where a variable is accessible

// let : variables are limited to block scope{}
// var variables are limited to a function(){}

// global variables is declared outside any function
// if global, var will CHANGE browser's window properties

for(let i = 1; i <= 23;  i+=1){
    console.log(i);
}
// global variable
let name = "Mirriam";

doSomething();
function doSomething(){
    for (var i = 1; i <= 23; i += 1) {
   // console.log(i);

    }
    console.log(i);

}  
