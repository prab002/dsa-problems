// palindrome string check
function isPalindrome(s) {
  let reverse = s.split("").reverse().join("");
  return s === reverse;
}

console.log(isPalindrome("play"));

// palindrome number check
function isPalindromeNumber(x) {
  let reverse = x.toString().split("").reverse().join("");
  return x.toString() === reverse;
}

console.log(isPalindromeNumber(121));
