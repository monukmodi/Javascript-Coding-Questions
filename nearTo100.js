// Find which value is nearest to 100.

const closeTo100 = (a,b) => {
    return (100-a) < (100-b) ? a : b
}
console.log(closeTo100(99,79));