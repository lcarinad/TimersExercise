function countDown(num) {
  let timer = setInterval(function () {
    console.log(num--);
    if (num <= 0) {
      clearInterval(timer);
      console.log("done!");
    }
  }, 1000);
}

function randomGame() {
  let counter = 0;
  let selector = setInterval(function () {
    let numSelector = Math.random();
    console.log(numSelector);
    if (numSelector < 0.75) {
      counter++;
    } else {
      counter++;
      clearInterval(selector);
      console.log(counter);
    }
  }, 1000);
}
