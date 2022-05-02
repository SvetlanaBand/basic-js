const { run } = require("mocha");
const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];

    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        arr.push(members[i].trim()[0].toUpperCase());
      }
    }

    arr.sort();

    return arr.join("");
  }
  return false;
}
let t = createDreamTeam(["Grace", "Amelia", "Grace", "Lily", "Ruby"]);
console.log(createDreamTeam(t));

module.exports = {
  createDreamTeam,
};
