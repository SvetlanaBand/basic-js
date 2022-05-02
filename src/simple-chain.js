const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },

  addLink(value) {
    let val = value === undefined ? '' : value;
    this.values.push(val);

    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position % 1 > 0 || position < 1 || position > this.values.length) {
      this.values = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.values = this.values.filter( (item, i) => i != position - 1);

    return this;
  },

  reverseChain() {
    this.values = this.values.reverse();

    return this;
  },

  finishChain() {
    let chain = '';

    for (let i = 0; i < this.values.length; i++) {

      if (i === 0) {
        chain += `( ${this.values[i]} )`;
      } else {
        chain += `~~( ${this.values[i]} )`;
      }

    }

    this.values = [];
    
    return chain;
  }
};

module.exports = {
  chainMaker
};
