const promiseOfLove = new Promise((resolve, reject) => {
  let inLove = true;

  if (inLove) {
    resolve("We are in love");
  }
  reject("not in love");
});

promiseOfLove
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
