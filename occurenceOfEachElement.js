var arr = [2,3,1,2,38,6,4,0,9]

// let arrLength = arr.length

// let count = {}

// for(let i =0 ; i<arrLength; i++){
//     let num = arr[i]
//     count[num] = count[num] ? count[num] + 1 : 1
// }
// console.log(count)

const occurence = (arr) => {
    let arrLength = arr.length

let count = {}

for(let i =0 ; i<arrLength; i++){
    let num = arr[i]
    count[num] = count[num] ? count[num] + 1 : 1
}
console.log(count)
}
occurence(arr)
