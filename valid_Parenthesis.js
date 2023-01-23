// A function to check if given pranthesis is valid or not.
function isValid(s) {
  const hashMap = { '(': ')', '{': '}', '[': ']' }
  const stack = []
  for (let ch of s) {
    if (hashMap[ch]) {
      // ch is an opening bracket
      stack.push(hashMap[ch])
    } else if (stack.length > 0 && stack[stack.length - 1] == ch) {
      // ch is a closing bracket and top of stack matches
      stack.pop()
    } else {
      // ch is a closing bracket and top of the stack doesn't match
      return false
    }
  }
  return stack.length === 0
}

let str1 = '([])'
console.log(isValid(str1))
