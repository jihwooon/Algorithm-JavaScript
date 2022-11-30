function bubblesSort(arr) {
  
  for(let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}


describe('서로 인접한 두 원소의 대소를 비교하고, 조건이 맞지 않다면', () => {
    it('자리를 교환하며 정렬한다', () => {
      expect(bubblesSort([37,45,29,8])).toStrictEqual([8,29,37,45]);
    });
  });
