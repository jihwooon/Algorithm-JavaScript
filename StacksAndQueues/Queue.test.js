let q = [];

q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

console.log(q)

q.shift();
q.shift();
q.shift();
console.log("Shift = " + q)

q.unshift("First");
q.unshift("Second");
q.unshift("Third");
console.log("UnShift = " + q)

q.pop();
q.pop();
console.log("Pop = " + q)

