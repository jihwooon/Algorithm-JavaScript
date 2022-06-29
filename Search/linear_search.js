function linear_search(arr, target) {

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

module.exports = linear_search;

console.log(linear_search([57, 29, 30, 45], 45));

function linear_search_recursive(arr, begin, end, target) {

  if (begin > end) {
    return -1;
  } else if (target === arr[begin]) {
    return begin;
  } else {
    return linear_search_recursive(arr, begin + 1, target);
  }
}

console.log(linear_search_recursive([57, 29, 30, 45], 0, 5, 30))
console.log(linear_search_recursive([57, 29, 30, 45], 0, 5, 50))
