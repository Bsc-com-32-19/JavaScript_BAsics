// array.filter() create a new array with all elments 
//that pass the test provided by a function

let ages = [18, 16, 25, 48, 50];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;

}

function print(element){
    console.log(element);
}
