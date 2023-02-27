// nested loop is a loop inside another

// for(let i = 1; i <= 3; i +=1){
//     for(let j = 1; j <= 3; j +=1){
//         console.log(j);
//     }
// }
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for (let rows = 1; rows <= 3; rows += 1) {
  for (let columns = 1; columns <= 3; columns += 1) {
   document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}