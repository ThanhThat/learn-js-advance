const promiseExp = () => {
  return new Promise((resolve, reject) => {
    resolve("get some data"); // success
    reject("Something wrongs") // error
  });
};

promiseExp()
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data, " => OK");
  })
  .catch((error) => {
    console.log(error);
  });
