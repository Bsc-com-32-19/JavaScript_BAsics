let grade = [100, 50, 80, 90, 40, 70];

// grade = grade.sort(descendingsort);

// grade.forEach(print);

// function descendingsort(x, y){
//     return y- x;

// }


grade = grade.sort(ascendingsort);

grade.forEach(print);

function ascendingsort(x, y) {
  return x - y
}



function print(element){
    console.log(element);
}