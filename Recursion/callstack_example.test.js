function countDown(num) {

  if(num < 0) {
    console.log("All done");
    return ;
  }
  num--;
  return countDown(num);
}

test('test',() => {
  expect(countDown(10)).toEqual();
})

function sumRange(num) {

  if(num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
  // return 3 + 2 + 1
}
//

test('bdd',() => {
  expect(sumRange(3)).toEqual(6);
})
