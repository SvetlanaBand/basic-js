const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater( str, options ) {
  newStr = [];
  rep = options.repeatTimes || 1;

  for (let i = 1; i <= rep; i++) {
    let add = [];
    if (options.additionRepeatTimes) {
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        add.push(String(options.addition));
      }
    }
    if (options.addition && !options.additionRepeatTimes) {
      add.push(String(options.addition));
    }

    newStr.push(str + add.join(options.additionSeparator || "|"));
  }
  return newStr.join(options.separator || "+");
}

module.exports = {
  repeater
};
module.exports = {
  repeater
};
