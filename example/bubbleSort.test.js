/*
## 문제에 대한 이해
우리가 풀어야 할 문제는 무엇인가?
 > 버블 정렬

## 실행
 > 1. 배열의 끝을 시작으로 i라는 변수로 루프를 시작하십시오.
 > 2. 처음부터 i - 1까지 j라는 변수를 사용하여 내부 루프를 시작합니다.
 > 3. arr[j]가 arr[j + 1]보다 크면 이 두 값을 바꿉니다!
 > 4. 정렬된 배열 반환
* */

function bubbleSort(array) {

  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

test('bubbleSort', () => {

  //[4,2,7,1,3] => [1,2,3,4,7]
  expect(bubbleSort([4, 2, 7, 1, 3])).toStrictEqual([1, 2, 3, 4, 7]);
  expect(bubbleSort([5, 2, 3, 1, 4])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(bubbleSort([1, 5, 3, 2, 4])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(bubbleSort([7, 5, 1, 2, 4])).toStrictEqual([1, 2, 4, 5, 7]);
})


/*
## 문제에 대한 이해
우리가 풀어야 할 문제는 무엇인가?
 > O(n^2) -> O(n)

## 실행
 1. existNumber 빈 배열을 생성한다.
 2.
* */

function hasDuplicateValue(array) {
  let existNumbers = [];
  console.log("existNumbers : " + existNumbers)
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
      console.log("array[i] : " + array[i])
      return true;
    } else {
      existNumbers[array[i]] = 1;
      console.log("existNumbers[array[i]] : " + existNumbers[array[i]])
    }
  }
  return false;
}

function solution(arr) {
  let test = arr[0];

  for (let i = 0; i < test.length(); i++) {
    if (i > test) {
      test = i;
    }
  }
  return test;
}

test('solution', () => {

})

test('hasDuplicateValue', () => {

  // expect(hasDuplicateValue([1,3,5])).toBeTruthy();
  // expect(hasDuplicateValue([2,3,5,4])).toBeFalsy()
  expect(hasDuplicateValue([1, 2, 6, 2, 3, 1])).toBeTruthy();
  // expect(hasDuplicateValue([1,3,5])).toBeTruthy();
  // expect(hasDuplicateValue([3,5])).toBeFalsy();
})