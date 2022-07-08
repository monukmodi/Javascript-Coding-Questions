// Given a String find the character that appears the most and total number of times it appears.
function maxChar(str){
    let obj = {}

    for(let char of str)
    (!obj[char])?obj[char]=1:obj[char]++
    console.log(obj)
}
maxChar('wjdjn8qwerqwerr')