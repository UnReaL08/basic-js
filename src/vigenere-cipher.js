class VigenereCipheringMachine {
    constructor(reverse) {
      this.reverse = reverse;
    }
  
    encrypt(message, key) {
      if(!message ||
        !key) throw new Error();
  
      alphabet = [];
      for (i = 65; i < 91; i++) {
        alphabet.push( String.fromCharCode(i) );
      }
  
      m = message.toUpperCase().split('');
      k = key.toUpperCase().split('');
  
      result = [];
      j = 0;
  
      for (i = 0; i < m.length; i++) {
        if(alphabet.indexOf(m[i]) === -1) {
          result.push(m[i]);
          continue;
        }
  
        sum = alphabet.indexOf(m[i]) + alphabet.indexOf(k[j]);
        finIndex = -1;
        
        if (alphabet.length - 1 - sum < 0) {
          finIndex = Math.abs(alphabet.length - 1 - sum) - 1;
        } else {
          finIndex = sum;
        }
        
        result.push(alphabet[finIndex]);
        
        j++;
        if (j === k.length) j = 0;
      }
  
      return (this.reverse === false) ? result.reverse().join('') : result.join('');
    }
  
    decrypt(message, key) {
      if(!message ||
         !key) throw new Error();
      
      alphabet = [];
      for (i = 65; i < 91; i++) {
        alphabet.push( String.fromCharCode(i) );
      }
  
      m = message.toUpperCase().split('');
      k = key.toUpperCase().split('');
  
      result = [];
      j = 0;
  
      for (i = 0; i < m.length; i++) {
        if(alphabet.indexOf(m[i]) === -1) {
          result.push(m[i]);
          continue;
        }
  
        mI = alphabet.indexOf(m[i]);
        kI = alphabet.indexOf(k[j]);
      
        finIndex = 1 + (mI > kI) ? mI - kI : kI - mI;
        if(finIndex < 0) {
          finIndex = alphabet.length + finIndex;
        }
        
        result.push(alphabet[finIndex]);
        
        j++;
        if (j === k.length) j = 0;
      }
  
      return (this.reverse === false) ? result.reverse().join('') : result.join('');
    }
  }
  
  module.exports = VigenereCipheringMachine;