// break is a statement which breakes out a loop entirely

for(let i = 1; i <= 20; i += 1){
    if(i == 13){
        break;
    }
    console.log(i);
}

//continue statement skip an iteration of a loop
for (let j = 1; j <= 20; j += 1) {
  if (j == 13) {
    continue;
  }
  console.log(j);
}