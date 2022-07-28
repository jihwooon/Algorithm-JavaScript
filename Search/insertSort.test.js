/*
배열의 두 번째 요소부터 시작하세요.
이제 두 번째 요소를 앞의 요소와 비교하고 필요한 경우 교환합니다.
다음 요소로 계속 진행하여 순서가 잘못된 경우 정렬된 부분(즉, 왼쪽)을 반복하여 요소를 올바른 위치에 배치합니다.
배열을 정렬할 때까지 반복합니다.
* */
function insertSort(arr) {

  for(let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    console.log("temp : " + temp)
    return temp;
  }

  return arr;
}


test('insertSort', () => {
  expect(insertSort([4, 3, 2, 1])).toStrictEqual(3);
})
