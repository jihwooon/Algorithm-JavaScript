function selectSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
}


describe('맨 처음 수를 최소값으로 두고, 다음 수를 비교해 다음 수가 더 작으면', () => {
    it('자리를 교환하며 정렬한다', () => {
      expect(selectSort([37,45 ,29,8])).toStrictEqual([8,29,37,45]);
    });
  });