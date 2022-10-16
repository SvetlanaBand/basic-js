const { NotImplementedError } = require("../extensions/index.js");

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
  if (!(arr instanceof Array)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  } else {
    /* throw new NotImplementedError('Not implemented'); */
    // remove line with error and write your code here
    let newArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == `--discard-next`) {
        i = i + 2;
      } else if (arr[i] == `--discard-prev`) {
        if (count !== 0) {
          newArr.pop();
          count--;
        }
        /* if (i == 0) {
        newArr[count] = arr[i];
        count++;
      } */
      } else if (arr[i] == `--double-next`) {
        if (i !== arr.length - 1) {
          newArr[count] = arr[i + 1];
          count++;
        }
      } else if (arr[i] == `--double-prev`) {
        if (i !== 0) {
          if (arr[i - 2] !== `--discard-next`) {
            newArr[count] = arr[i - 1];
            count++;
          }
        }
      } else {
        newArr[count] = arr[i];
        count++;
      }
    }
    return newArr;
  }
}
module.exports = {
  transform,
};
