const people = [
  {
    id: 1,
    firstName: "Mirriam",
    lastName: "Yambeni",
  },
  {
    id: 2,
    firstName: "Resten",
    lastName: "Madzalo",
  },
  {
    id: 3,
    firstName: "Isaac",
    lastName: "Kalambo",
  },
];

console.log(people);

people.map((person) => {
  console.log(`First name: ${person.firstName}`);
    console.log(`Last name: ${person.lastName}`);
    console.log("");

});
