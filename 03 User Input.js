// // How to accept user input

// // Easy way with a window prompt
// let userName = window.prompt("What is your name ?");
// console.log(userName);

// // Difficult with HTML textbox
// let user_name;
// document.getElementById("myButton").onclick = function(){

//    username = document.getElementById("myText").value;
//    console.log(user_name);
//    }
   
// // or 
   let username;
document.getElementById("myButton").onclick = function(myText){

   username = document.getElementById("myText").value;
   console.log(username);
}
