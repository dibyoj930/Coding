function addComma(num) {
 
    const [integer, decimal] = num.toString().split('.');
    const digits = integer.split('').reverse();
    const parts = [];
  
    for (let i = 0; i < digits.length; i++) {
      if (i > 0 && i % 3 === 0) {
        parts.push(',');
      }
      parts.push(digits[i]);
    }
  
    const formatted = parts.reverse().join('');
    return decimal ? `${formatted}.${decimal}` : formatted;
  
  }

  addComma(1) // '1'
addComma(1000) // '1,000'
addComma(-12345678) // '-12,345,678'
addComma(12345678.12345) // '12,345,678.12345'