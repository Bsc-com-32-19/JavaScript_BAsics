// Gives us the ability to check more than 1 condition concurently.
// &&AND (Both condition must be true)
// || OR (Either condition can be true)

//and operator and boolean data type
let temp = 15;
let sunny = true

if(temp > 0 && temp < 30 && sunny){
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}

let tempe = -10;

if (tempe > 0 && tempe < 30) {
  console.log("The weather is good!");
} 
else {
  console.log("The weather is bad!");
}

// or operator
let temper = 50;

if (temper <= 0 || temper < 30) {
  console.log("The weather is bad!");
} else {
  console.log("The weather is good!");
}

let temperature = 15;

if (temperature <= 0 || temperature < 30) {
  console.log("The weather is bad!");
} else {
  console.log("The weather is good!");
}