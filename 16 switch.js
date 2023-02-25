// switch is a statement that examines a 
//value for a match against many case clauses.
// more efficient that many else if statements.

let grade = "pizaa";

switch(grade){
    case "A":
        console.log("You did greate!");
        break;

     case "B":
        console.log("You did good!");
        break;

    case "C":
        console.log("You did okay!");
        break;

    case "D":
        console.log("You passed ... barely!");
        break;

    case "F":
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade!");    

}