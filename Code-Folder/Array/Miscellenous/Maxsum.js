function minSum(arr) {
    arr.sort((a, b) => a - b);

 let num1 = [], num2 = [];

 for (let i = 0; i < arr.length; i++) {
     if (i % 2 === 0) {
         num1.push(arr[i]);
     } else {
         num2.push(arr[i]);
     }
 }

 // Add the numbers digit by digit (like column addition)
 let i = num1.length - 1;
 let j = num2.length - 1;
 let carry = 0;
 let result = [];

 while (i >= 0 || j >= 0 || carry > 0) {
     let digit1 = i >= 0 ? num1[i--] : 0;
     let digit2 = j >= 0 ? num2[j--] : 0;

     let sum = digit1 + digit2 + carry;
     result.push(sum % 10);
     carry = Math.floor(sum / 10);
 }
let cleaned = result.reverse();

// Remove leading zeros
let iz = 0;
while (cleaned[iz] == 0) {
 iz++;
}

let finalDigits = cleaned.slice(iz);

// If array is empty after removing zeros, it's just "0"
return finalDigits.length ? finalDigits.join("") : "0";
 }
//  Input: arr[] = [6, 8, 4, 5, 2, 3]
// Output: "604"
// Input: arr[] = [5, 3, 0, 7, 4]
// Output: "82"