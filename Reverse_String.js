// Given an String and Reverse that
//  reverse('JSCode')==='edoCSJ'

// Solution --- 1

// convert string into array
// Reverse it in the array
// turn array back into string

function reverseString (str){
    const arr = str.split("")
    arr.reverse()
    str = arr.join("")
    console.log(str)
}

reverseString('apple')

// Solution --- 2

// create an empty string
// Loop through each character
// return the reversed string

function revString(str){
    let reversed = ''
    for(let character of str){
        reversed = character + reversed
    }

    console.log(reversed)
}
revString("hello")