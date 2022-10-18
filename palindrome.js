// Leetcode Problems
// Problem - 125. Valid Palindrome
// Is given string palindrome

// Solution 1

// const s = 'abc'
// var reversedString = s.split("").reverse().join("")
// console.log(reversedString)

//  Solution 2
function isPalindrome(S){

    S =S.toLocaleLowerCase().replace(/[\W_]/g,"") // Replace all non characters with ""

    let left = 0;
    let right = S.length -1
    
    while(left < right){
        if(S[left] !== S[right]){
            return console.log(false)
        }
        left++
        right--
    }
    return console.log(true)
}
isPalindrome("aba")