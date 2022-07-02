// Create New string by adding first 3 char and last 3 char of the given string

const makeNewString = (str) => {
   return str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
}

console.log(makeNewString("abddbc342"));