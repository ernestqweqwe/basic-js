const { notimplementederror } = require('../extensions/index.js');

/**
 * implement class vigenerecipheringmachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directmachine = new vigenerecipheringmachine();
 * 
 * const reversemachine = new vigenerecipheringmachine(false);
 * 
 * directmachine.encrypt('attack at dawn!', 'alphonse') => 'aeihqx sx dllu!'
 * 
 * directmachine.decrypt('aeihqx sx dllu!', 'alphonse') => 'attack at dawn!'
 * 
 * reversemachine.encrypt('attack at dawn!', 'alphonse') => '!ulld xs xqhiea'
 * 
 * reversemachine.decrypt('aeihqx sx dllu!', 'alphonse') => '!nwad ta kcatta'
 * 
 */

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let charCode = (message.charCodeAt(i) - 65 + key.charCodeAt(keyIndex % key.length) - 65) % 26 + 65;
        result += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let charCode = (message.charCodeAt(i) - 65 - (key.charCodeAt(keyIndex % key.length) - 65) + 26) % 26 + 65;
        result += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
;
