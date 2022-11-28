function bubblesSort(arr) {
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  return arr;
}


describe('numberCompare은', () => {
    it('테스트', () => {
      expect(bubblesSort([37,45,29,8])).toStrictEqual([8,29,37,45]);
    });
  });