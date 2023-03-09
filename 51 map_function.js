// map is the object that holds key-value pairs of any data type

const store = new Map([
    ["skirt", 30],
    ["browse", 20],
    ["socks", 60],
    ["brah", 90]
]);

// let shoppingCart = 0;

// // shoppingCart += store.get("skirt");
// // shoppingCart += store.get("brah");

// // console.log(shoppingCart);
store.get("skirt")
store.set("hat", 80);
store.delete("hat");
// for boolean type
console.log(store.has("brah"));
console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));