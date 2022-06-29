function countDownMinus(num) {
  if (num < -0) {
    console.log("ALL done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

console.log("countDownMinus = " + countDownMinus(5));

function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}

console.log("countDown = " + countDown(5));