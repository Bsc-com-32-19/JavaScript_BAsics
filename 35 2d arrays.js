// 2D array is an array of arrays

let fruits =     ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chickens", "fish"];

let groceryList = [fruits,vegetables,meats];
 groceryList[0][0] = "mangoes"
 groceryList[0][2] = "mango";
 groceryList[2][0] = "steak"; 
 groceryList[2][2] = "beef";

for(let list of groceryList){
    for(let food of list){
        console.log(food);


    }
}