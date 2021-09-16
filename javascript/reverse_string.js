const reverseString = (str) => {
  // need to iterate from back to front
  // and populate new array; join once
  // complete
  return str.split('').reduce((p, c, index, chars) => {
    p.push(chars[(chars.length - 1) - index])
    return p
  }, []).join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'")
  console.log("=>", reverseString("hi"))

  console.log("")

  console.log("Expecting: 'ybabtac'")
  console.log("=>", reverseString("catbaby"))
}

module.exports = reverseString

// Please add your pseudocode to this file
// And a written explanation of your solution
