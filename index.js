function delayTwoSeconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
}

delayTwoSeconds()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });