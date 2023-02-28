const answer = Math.floor(Math.random() * 10 + 1);
esses = 0;

document.getElementById("submitButton").onclick = function(){


let guess = document.getElementById("guessField").value
guess+=1;

if(guess == answer){
    alert(`${answer} is the #. It took you ${guesses} guess`)
}
else if(guess < answer){
    alert("Too small");
}
 else{
    alert("Too large!");
 }  



}