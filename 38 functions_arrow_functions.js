function greet() {
  console.log(`Good morning! ${name}`);
}

greet("Mirriam Yambeni");

function add(a, b) {
  result = a + b;
  console.log(`addition of a and b is ${result}`);
}

// add(2, 5);
const userDetails = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
  console.log(`Welcome to callbacks`);
};

const greetUser = (name) => {console.log(`Hello ${name}`)
console.log("Good morning!");
userDetails("Mirriam", "Yambeni")

};



greetUser("Mirriam");
// userDetails()
