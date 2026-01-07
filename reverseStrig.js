var text = ["a", "b", "c", "d"];

var rev = [];

// for (i = 0; i < text.length; i++) {
//   rev.push(text[text.length - 1 - i]);
// }
// console.log(rev);

// this approach takes extra space
var reverseString = function (s) {
  var reverse = []; // extra space

  for (i = 0; i < s.length; i++) {
    var test = s[s.length - 1 - i];
    reverse.push(test.toLowerCase());
  }
  console.log(reverse);
};

// this approach is O(n) time complexity and O(n) space complexity
// reverseString(["H", "e", "l", "l", "o"]);

// ====================================================================

// this approach is O(n) time complexity and O(1) space complexity
var reverseStringInPlace = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[i];

    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  console.log(s);
};

// reverseStringInPlace(["H", "e", "l", "l", "o"]);



// ====================================================================

// normal string reverse using javascript function
var reverseStringUsingJS = function (s) {
  return s.split("").reverse().join("");
};

console.log(reverseStringUsingJS("hello"));
