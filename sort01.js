function sort01(nums){
    let arrLength = nums.length
    let l = 0
    let h = arrLength - 1
    while(l<h){
        while(nums[l] == 0 && l<h){
            l++
        }
        while(nums[h] == 1 && l<h){
            h--
        }
        if(l<h){
            nums[l] = 0
            nums[h] = 1
            l++
            h--
        }
    }
    return nums
}

var arr=[0,1,1,0]
var sortedArray = sort01(arr)
console.log(sortedArray);