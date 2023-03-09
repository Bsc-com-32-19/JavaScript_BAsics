// object is a group of properties and methods .

// propeties what an object has.
// methods what an object can do
// use .(dot) to access properties/ methods


const car = {
    model:"Mustang",
    color:"Blue",
    year:"2023",

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brake");
    }
}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();


const car2 = {
  model: "Corvette",
  color: "meroon",
  year: "2025",

  drive: function () {
    console.log("You drive the car");
  },
  brake: function () {
    console.log("You step on the brake");
  },
};

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();