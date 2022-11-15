function linearSearch (arr, val) {
  for(var i = 0; i <arr.length; i++) {
    if(arr[i]=== val) {
      return i;
    }
  }
  return -1;
}

describe('linearsearch', () => {
  it('검색을 한다' , () => {
    expect(linearSearch([34,56,1,2], 1)).toEqual(2);
    expect(linearSearch([34,56,1,2], 4)).toEqual(-1);
  });
});

