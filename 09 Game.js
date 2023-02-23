let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel1").innerHTML = x;
    document.getElementById("ylabel1").innerHTML = y;
    document.getElementById("zlabel1").innerHTML = z;

}