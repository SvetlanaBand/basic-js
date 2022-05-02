const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let transformedArr = [];

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-prev') {

      arr[i - 1] && transformedArr.pop();

    } else if (arr[i] === '--discard-next') {

      arr[i + 1] && i++ && transformedArr.push('del');

    } else if (arr[i] === '--double-prev') {

      arr[i - 1] && transformedArr.push(transformedArr[transformedArr.length - 1]);

    } else if (arr[i] === '--double-next') {

      arr[i + 1] && transformedArr.push(arr[i+1]);

    } else {

      transformedArr.push(arr[i]);
      
    }
  }
}
  

module.exports = {
  transform
};
