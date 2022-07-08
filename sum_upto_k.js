// Given an Array of Intergers arr=[] and and integer k, create a boolean function that checks if there exists two elements in arr=[] such that we get k when we add them together

// Solution --- 1

// Brute Force Solution - ( Checking all possible pairs untill finding the right one )


var Arr = [0, 2, -3, 1]
var k = -2

function chkPair(Arr,k){
    let sizeOfArr = Arr.length
    for (let i =0; i<sizeOfArr - 1; i++){
        for(let j=0 ; j<sizeOfArr; j++){
            if(Arr[i] + Arr[j] == k){
                console.log("pair of given sum is " + k + " = " +Arr[i] + "," + Arr[j])
            }
        }
    }
}

chkPair(Arr,k)