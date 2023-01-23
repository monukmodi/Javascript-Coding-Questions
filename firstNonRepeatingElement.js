function firstNonRepeatingElement(str) {
  const obj = {}
  for (let elem of str) {
    if (obj[elem]) {
      obj[elem] = obj[elem] + 1
    } else {
      obj[elem] = 1
    }
    // obj[elem] = obj[elem] ? obj[elem] + 1 : 1
  }
  console.log('occurence', obj)

  for (let elem in obj) {
    if (obj[elem] == 1) {
      return elem
    }
  }

  return -1
}

var str = '1122343599787'
console.log(firstNonRepeatingElement(str))
