// function expression is a function without a name 
//(annonymous function) avoid polluting the global scope 
//with write it, then forget about it

// const greeting = function(){
//      console.log("hello!");
// }

// greeting();

let count = 0;

document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function (){
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
};




