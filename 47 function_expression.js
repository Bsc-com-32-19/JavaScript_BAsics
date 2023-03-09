// function expression is a function without a name
//(annonymous function) avoid polluting the global scope
//with write it, then forget about it

// const greeting = function(){
//      console.log("hello!");
// }

// greeting();

let count = 0;

const increaseButton = document.getElementById("increaseBtn");
const countText = document.getElementById("myLabel");
countText.style.fontSize = "50px";
increaseButton.onclick = function () {
  count += 1;
  countText.innerHTML = count;
  countText.style.color = "darkgreen";
};

document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  countText.innerHTML = count;
};
