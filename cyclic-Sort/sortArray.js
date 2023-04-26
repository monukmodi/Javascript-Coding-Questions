// Sort an Array using cyclic sort (1-n)
function cyclicSort(nums) {
  let i = 0
  let n = nums.length
  while (i < n) {
    const j = nums[i] - 1
    if (nums[i] !== nums[j]) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }
  return nums
}
const arr = [1, 2, 4, 5, 6, 3]
const sortedArray = cyclicSort(arr)
console.log(sortedArray)
