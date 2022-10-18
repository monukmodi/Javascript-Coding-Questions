//  Given a String s, Find the longest palindrome substring in s
// -----Example
// longestPalindromeSubstring("cbbd") ---> "bb"

function longestPalindromeSubstring(s){
    let startIndex = 0
    let maxLength = 1

    function expandAroundMiddle(left,right){
        while(left>=0 && right<s.length && s[left] === s[right]){
            const currentPalLength = right - left + 1
            if(currentPalLength > maxLength){
                maxLength = currentPalLength
                startIndex = left
            }
            left--
            right++
        }
    }

    for(let i =0; i<s.length; i++){
        expandAroundMiddle(i-1,i+1)
        expandAroundMiddle(i,i+1)
    }
    return s.slice(startIndex,startIndex+maxLength)
}
var output = longestPalindromeSubstring("a")
console.log(output);

// Time Complexity = O(n^2)
// Since expanding a palindrome around its center could take upto O(n) and we do this for each character