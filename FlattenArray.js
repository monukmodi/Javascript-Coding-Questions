// Flatten Array
function FlattenArray(arr) {
  var flatArray = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(FlattenArray(arr[i]))
    } else {
      flatArray.push(arr[i])
    }
  }
  return flatArray
}

var arr = [1, 2, 3, 4, [5, 6, [7, 8]], [9]]
console.log(FlattenArray(arr))
