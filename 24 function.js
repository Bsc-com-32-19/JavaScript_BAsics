// function : define a code once and use it many times.
// to perfom some code, call the function name.

startProgram();
function startProgram(){
    let userNamne = "Mirriam";
    let age = 22;

    happBirthday(userNamne, age);
    happBirthday(userNamne, age);


}

function happBirthday(userNamne, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", userNamne);
  console.log("You are", age, "years old!");
}