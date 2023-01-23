// Leetcode Problems
// Problem - 125. Valid Palindrome
// Is given string palindrome

// Solution 1

// const s = 'abc'
// var reversedString = s.split("").reverse().join("")
// console.log(reversedString)

//  Solution 2
function isPalindrome(str) {
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      return console.log(false)
    }
    left++
    right--
  }
  return console.log(true)
}
const str = 'abbac'
isPalindrome(str)
