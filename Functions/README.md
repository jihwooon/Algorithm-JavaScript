## 재귀 함수란?
일정 함수를 내부적인 로직을 반복하다가, 일정 조건 함수가 만족되면 함수를 이탈하여 결과를 도출하는 함수 


## 재귀 함수의 두 가지 기본 요소

1. 라인을 끝내는 종료 조건

```javascript
function countDownMinus(num) {
  if (num < -0) {
    console.log("ALL done!");
    return;
  }

  console.log(num);
  num--;
  countDownTest(num);
}

console.log("countDownMinus = " + countDownMinus(5));

```

```javascript
function countDownTest(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}

console.log("countDownTest = " + countDownTest(5));
```

2. 다른 입력값

```javascript
function sumRange(num) {
 if (num === 1) return 1;

  return num + sumRange(num -1);
}

console.log("sumRange = "+ sumRange(2));
```

