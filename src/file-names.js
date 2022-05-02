const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let newN = [];
  let ind = {};

  names.forEach((n) => {
    if (newN.includes(n)) {
      ind[n] ? ind[n]++ : ind[n] = 1
      newN.push(n + `(${ind[n]})`);
    } else {
      newN.push(n);
      ind[n] = 0;
    }
  });
  return newN
}

module.exports = {
  renameFiles
};
