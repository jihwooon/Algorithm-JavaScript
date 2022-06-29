/*

## 선택 정렬이란?
버블 정렬과 유사하지만 먼저 큰 값을 정렬된 위치에 배치하는 대신 작은 값을 정렬된 위치에 배치합니다

## 실행
1. 지금까지 보았던 가장 작은 값으로 첫 번째 요소를 저장합니다.
2. 더 작은 숫자를 찾을 때까지 이 항목을 배열의 다음 항목과 비교합니다.
3. 더 작은 숫자가 발견되면 더 작은 숫자를 새로운 "최소값"으로 지정하고 배열이 끝날 때까지 계속합니다.
4. "최소값"이 처음에 시작한 값(인덱스)이 아닌 경우 두 값을 맞바꾸십시오.
5. 배열이 정렬될 때까지 다음 요소를 사용하여 이 작업을 반복합니다.
* */

function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i != lowest) {
      console.log(arr);
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}


test('selection sort', () => {
  expect(selectionSort([3, 2, 1, 7])).toStrictEqual([1, 2, 3, 7]);
  expect(selectionSort([5, 2, 3, 1])).toStrictEqual([1, 2, 3, 5]);
  expect(selectionSort([4, 2, 3, 1])).toStrictEqual([1, 2, 3, 4]);
  expect(selectionSort([6, 2, 3, 1, 7])).toStrictEqual([1, 2, 3, 6, 7]);
})

/*
## 삽입 정렬이란?
삽입 정렬은 하나를 취해서 올바른 위치에 삽입한다.

## 실행
1. 배열의 두 번째 요소를 선택하는 것부터 시작합니다.
2. 이제 두 번째 요소를 앞의 요소와 비교하고 필요한 경우 교환합니다.
3. 다음 요소로 계속 진행하여 순서가 잘못된 경우 정렬된 부분(즉, 왼쪽)을 반복하여 요소를 올바른 위치에 배치합니다.
4. 배열을 정렬할 때까지 반복합니다.
*/

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp_value = arr[i];
    let position = i - 1;

    while (position >= 0) {
      if (arr[position] > temp_value) {
        arr[position + 1] = arr[position];
        position = position - 1;
        console.log("position : " + position)
      } else {
        break;
      }
      arr[position + 1] = temp_value;
    }

    return arr;
  }
}

//[1, 3, 2] => [1, 2, 3]
test('insert sort', () => {
  // expect(insertSort([1, 2])).toStrictEqual([1, 2]);
  expect(insertSort([2, 1])).toStrictEqual([1, 2]);
  // expect(insertSort([3, 2, 1])).toStrictEqual([1, 2, 3]); // [2, 3, 1]
  // expect(insertSort([1, 4, 3, 2])).toStrictEqual([1, 2, 3, 4]);
})


function count_one(outer_arr) {
  let count = 0;

  for (const inner_arr in outer_arr) {
    for (const number in inner_arr) {
      if (number == 1) {
        count += 1;
      }
    }
    return count;
  }
}

