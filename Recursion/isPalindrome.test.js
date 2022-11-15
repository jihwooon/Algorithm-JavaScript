/**
 * Write a recursive function called isPalindrome which returns true
 * if the string passed to it is a palindrome (reads the same forward and backward).
 * Otherwise it returns false.
 * */
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {

  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

  return false;
}

describe('isPalindrome', () => {
  it('true로 반환한다.', () => {
    expect(isPalindrome('awesome')).toBe(false);
  });
});
