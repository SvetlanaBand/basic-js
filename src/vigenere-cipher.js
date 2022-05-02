const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }
  encrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");

    let strArr = str.toUpperCase().split("");
    let keyArr =
      str.length > key.length
        ? key
            .repeat(Math.ceil(str.length / key.length))
            .toUpperCase()
            .split("")
        : key.toUpperCase().split("");

    let newStr = "";

    strArr.forEach((s) => {
      if (s.charCodeAt() > 64 && s.charCodeAt() < 91) {
        let sCode = s.charCodeAt() - 65;
        let kCode = keyArr.splice(0, 1).join("").charCodeAt() - 65;
        let nKey = ((sCode + kCode) % 26) + 65;
        newStr += String.fromCharCode(nKey);
      } else {
        newStr += s;
      }
    });

    return this.reverse ? newStr : newStr.split("").reverse().join("");
  }
  decrypt(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");

    let strArr = str.toUpperCase().split("");
    let keyArr =
      str.length > key.length
        ? key
            .repeat(Math.ceil(str.length / key.length))
            .toUpperCase()
            .split("")
        : key.toUpperCase().split("");

    let newStr = "";

    strArr.forEach((s) => {
      if (s.charCodeAt() > 64 && s.charCodeAt() < 91) {
        let sCode = s.charCodeAt() - 65;
        let kCode = keyArr.splice(0, 1).join("").charCodeAt() - 65;
        let nKey = sCode - kCode < 0 ? 91 + (sCode - kCode) : ((sCode - kCode) % 26) + 65;
        newStr += String.fromCharCode(nKey);
      } else {
        newStr += s;
      }
    });

    return this.reverse ? newStr : newStr.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
