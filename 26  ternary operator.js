/*ternary operator is a shortcut dor an if/else statemnent.
  Takes 3 operanda
     1. acondition with ?
     2. expression if True:
     3. expression if False

  condition ? expreIfTue : expreIfFalse
 
*/

checkWinner(true);
checkWinner(false);


function checkWinner(win){
    win? console.log("You win!"): console.log("You lose!");
}