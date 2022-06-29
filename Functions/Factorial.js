//4! =  4 * 3 * 2 * 1

// function Factorial(num) {
//   let total = 1;
//
//   for(let i = 0; i < num; i++) {
//        const sum = total * i;
//        console.log(sum);
//   }
// }

// 고전적인 팩토리얼 구하기
// function Factorial(num) {
//   let total = 1;
//
//   for (let i = num; i > 0; i--) {
//     console.log(total[i] = i);
//     total *= i
//   }
//   return total;
//
// }
//
// console.log("Factorial : " + Factorial(4));

// 재귀 호출로 팩토리얼 구현하기
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log("Factorial : " + factorial(2));

module.exports  = factorial;