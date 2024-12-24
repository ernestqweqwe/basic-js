const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let s2Arr = s2.split('')
  let sum = 0
const resultArr = s1.split('').reduce((arr, letter, currentIndex, array) => {
  index  = arr.findIndex((value => value === letter))
  if(index>= 0 ) {
      arr.splice(index, 1)
      sum+=1
  }
  return arr
}, s2Arr)

return sum
}

module.exports = {
  getCommonCharacterCount
};
