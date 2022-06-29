// Original Solution
function binarySearch(arr, target) {
  let begin = 0; // 시작점
  let end = arr.length - 1; // 자릿수 - 1
  let middle = Math.floor((begin + end) / 2);

  while (arr[middle] != target) { //중간값 일치 하지 않을 경우
    if (target < arr[middle]) {
      end = middle - 1
    } else {
      begin = middle + 1
    }
    middle = Math.floor((begin + end) / 2)

    if (target == arr[middle]) {
      return middle
    }
  }
  console.log(begin, end, middle);

  return -1;

}

binarySearch([1, 2, 3, 4, 5], 2); // 3

//[1, 2, 3, 4, 5]
// S     M     E
// S < M :


function test(arr, target) {
  let begin = 0;
  let end = arr.length - 1;
  let middle = Math.floor((begin + end) / 2);

  while (arr[middle] != target && begin <= end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      begin = middle + 1;
    }
    middle = Math.floor((begin + end) / 2);
  }
  if (arr[middle] === target) {
    return middle;
  }
  return -1;
}



module.exports = binarySearch;