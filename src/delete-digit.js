const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) { 
  // length = String(n).split('').length
  // let arr= []
  // for(let i =0; i<length; i++){
  //     let newArr = String(n).split('')
  //   console.log(newArr.splice(i,1))
  //   arr.push(newArr)
  // }
  // let numberArr =  arr.map((item)=> Number(item.join('')))
  //  return numberArr.sort((a,b)=> b - a)[0]
   
  const numbers = String(n).split('')
  const arrayOfNumbers = numbers.map((value, index) => {
    modArr = [... numbers]
    modArr.splice(index,1)
    return Number(modArr.join(''))
  })
  
  return Math.max(...arrayOfNumbers)
}

module.exports = {
  deleteDigit
};
