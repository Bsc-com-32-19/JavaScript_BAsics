/* nested function is a functions inside other functions.
Outer functions have access to inner functions.
Inner functions are hidded from outside the otter function.
Used in closures 
*/

let userName = "Mirriam";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);

    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}
