/**
 * 스택은 선입후출(=후입선출)로 되어 있다.
 *
 * 가장 먼저 들어것을 맨 마지막에 제거 한다.
 *
 * */
let stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");

console.log("stack push = " + stack)

stack.pop();
console.log("stack fist pop = " + stack)

stack.pop();
console.log("stack second pop = " + stack)

stack.pop();
console.log("stack third pop = " + stack)


stack.length;
console.log(stack)

// unshift
let stack_unshift = [];

stack_unshift.unshift("create new file"); // 새로운 요소를 맨 첫번째 배열에 추가하고, 새로운 길이는 반환한다.
stack_unshift.unshift("cloned out wrinkle");
stack_unshift.unshift("resized file");

stack_unshift.shift();// 맨 첫번째 요소를 제거하고 제거 된 요소를 반환한다. 배열의 길이는 변화된다.
console.log("stack_unshift = " + stack_unshift)