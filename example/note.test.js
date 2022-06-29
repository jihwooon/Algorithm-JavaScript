function isLeapYear(year) {
  //condition ? exprIfTrue : exprIfFalse
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

test('isLeapYear', () => {
  expect(isLeapYear(100)).toBe(false);
  expect(isLeapYear(200)).toBe(false);
  expect(isLeapYear(300)).toBe(false);
  expect(isLeapYear(400)).toBe(true);
});

function arraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

test('arraySum', () => {
  expect(arraySum('1')).toBe('01');
  expect(arraySum('12')).toBe('012');
  expect(arraySum('123')).toBe('0123');
  expect(arraySum('1234')).toBe('01234');
  expect(arraySum('12345')).toBe('012345');
});


function chessboardSpace(numberOfGrains) {
  let chessboardSpaces = 1;
  let placedGrains = 1;

  while (placedGrains < numberOfGrains) {
    placedGrains *= 2;
    console.log("placedGrains : " + placedGrains)
    chessboardSpaces += 1;
    console.log("chessboardSpaces : " + chessboardSpaces)
  }

  return chessboardSpaces;
}

test('chessboardSpace', () => {
  expect(chessboardSpace(0)).toBe(1);
  expect(chessboardSpace(1)).toBe(1);
  expect(chessboardSpace(2)).toBe(2);
  expect(chessboardSpace(3)).toBe(3);
  expect(chessboardSpace(4)).toBe(3);
  expect(chessboardSpace(5)).toBe(4);
  expect(chessboardSpace(6)).toBe(4);
  expect(chessboardSpace(7)).toBe(4);
  expect(chessboardSpace(8)).toBe(4);
  expect(chessboardSpace(9)).toBe(5);
  expect(chessboardSpace(10)).toBe(5);
});


function selectAString(array) {

  console.log("array : " + array);
  let newArray = [];
  console.log("newArray : " + newArray);

  for (let i = 0; i < array.length; i++) {
// startsWith() 메소드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환합니다.
    if (array[i].startsWith('a')) { // 첫번째 글자가 a로 시작하면 true 반환
      newArray.push(array[i]);
    console.log("newArray_result : " + newArray);
    }
  }

  return newArray;
}

test('selectAString', () => {
  expect(selectAString(['aaaa','asdg','bcb'])).toStrictEqual(['aaaa','asdg']);
  expect(selectAString(['bc','bcsa','sssdea', 'assse'])).toStrictEqual(['assse']);
})

function median(array) {
  const middle = Math.floor(array.length / 2 );

  if(array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2;
  } else {
    return array[middle];
  }
}

test('median', () => {
  expect(median('1')).toBe("1");
  expect(median('12')).toBe(6);
  expect(median('123')).toBe("2");
  expect(median('1234')).toBe(11.5);
  expect(median('12345')).toBe("3");
  expect(median('123456')).toBe(17);
  expect(median('1234567')).toBe("4");
  expect(median('12345678')).toBe(22.5);
  expect(median('123456789')).toBe("5");
  expect(median('12345678910')).toBe("6");
  expect(median('123456789101')).toBe(33.5);
})