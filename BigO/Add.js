function add(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function add2(n) {
  return n * (n + 1) / 2;
}

function add3(n) {

  if (n == 0) {
    return 0;
  }

  return n + add3(n - 1);
}

function logAllBinaries(n) {
  let count = 0;
  let lastNum = "1".repeat(n);
  while (count.toString(2) !== lastNum) {
    console.log(count.toString(2).padStart(n, "0"));
    count++;
  }
  console.log(lastNum);
}

function numberOfHalves(n) {
  let count = 0;
  while (n > 1) {
    n /= 2;
    count++;
  }
  return count;
}

// console.log(numberOfHalves(1101))

function totalNumberOfHalves(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += numberOfHalves(n);
  }
  return total;
}

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log(double("3333"));

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}

function logAtLeast4(n) {
  for (let i = 1; i <= Math.min(3, n); i++) {
    console.log(i)
  }
}

console.log(logAtLeast5(0));
console.log(logAtLeast4(30));

function onlyElementsAtEvenIndex(array) {
  let newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

console.log(onlyElementsAtEvenIndex('123456'));

// O(1)
function sum(str) {
  let total = 0;
  for (let i = 0; i <= str.length; i++) {
    total += str[i];
  }
  return total;
}

console.log("문자열 출력 : " + sum("출력하세요"))

// O(n)
function double(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log("배열 출력 : " + double([1, 2, 3, 5]))