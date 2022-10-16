//  Given an Array containing 0,1,2 sort this arrays



// ************   Method 1   **********

// function sort012(arr){
//     var sortedArray = arr.sort()
//     return sortedArray
// }
// var arr = [0,2,1,2,1]
// console.log(sort012(arr))



// ************   Method 2   **********  

// function sort012(array){
//     let count_0 = 0
//     let count_1 = 0
//     let count_2 = 0
//     let arrLength = array.length

//     for(let i = 0; i<arrLength; i++){
//         if(array[i] == 0){
//             count_0++
//         }
//         else if(array[i] == 1){
//             count_1++
//         }
//         else{
//             count_2++
//         }
//     }
//     for(let i = 0; i<count_0; i++){
//         array[i] = 0
//     }
//     for(let i = count_0; i<count_0+count_1; i++){
//         array[i] = 1
//     }
//     for(let i = count_0+count_1; i<count_0+count_1+count_2; i++){
//         array[i] = 2
//     }

//     return array;


// }

// var nums = [0,1,2,1,2,1,1,0,2]

// var sortedNums = sort012(nums)
// console.log(sortedNums);



// // ************   Method 3   **********

function sort012(arr){
    let arrLength = arr.length
    let l=0
    let m = 0
    let h = arrLength- 1

    while(m<=h){
        if(arr[m] == 0){
            temp = arr[l]
            arr[l] = arr[m]
            arr[m] = temp
            l++
            m++
        }
        else if(arr[m] == 1){
            m++
        }
        else{
            temp = arr[m]
            arr[m] = arr[h]
            arr[h] = temp
            h--
        }

    }
    return arr
}


var arr = [0,2,1,2,1]
console.log(sort012(arr))