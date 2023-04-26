function findMissingNumbers(nums) {
  const missingNumbers = []
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
  for (i = 0; i < n; i++) {
    // console.log('i', i)
    // console.log('nums[i] ===> ', nums[i])
    // console.log('i+1 ===> ', i + 1)
    if (nums[i] !== i + 1) {
      missingNumbers.push(i + 1)
      //   console.log('missingNumbers.push(i + 1)', missingNumbers.push(i + 1))
    }
  }
  return missingNumbers
}
const arr = [1, 2, 4, 6, 7, 8]
const missingNumbers = findMissingNumbers(arr)
console.log(missingNumbers)
