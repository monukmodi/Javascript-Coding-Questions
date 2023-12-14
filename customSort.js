// Given an Array of Integers
// Sort Unique elements in ascending order and duplicate elements in descending order.

// Example
//     input : [2, 1, 9, 1, 2, 5, 1, 6, 1]
//     output: [5, 6, 9, 2, 2, 1, 1, 1, 1]

function customSort(arr) {
  const counts = {}
  // Occurence of Each Element
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1
  })

  //   Separate Unique Elements and duplicate elements
  const uniqueElement = []
  const duplicateElement = []

  arr.forEach((num) => {
    if (counts[num] === 1) {
      uniqueElement.push(num)
    } else {
      duplicateElement.push(num)
    }
  })

  //   Sort unique elements in ascending order
  uniqueElement.sort((a, b) => a - b)

  //   Sort duplicate elements in descending order
  duplicateElement.sort((a, b) => b - a)

  //   Concatenate unique elements and duplicate elements
  const result = uniqueElement.concat(duplicateElement)

  return result
}

const nums = [2, 1, 9, 1, 2, 5, 1, 6, 1]
const result = customSort(nums)
console.log(result)
