var minRemoveToMakeValid = function(s) {
    let stack = [];
     let sArr = s.split('');
 
     for (let i = 0; i < sArr.length; i++) {
         if (sArr[i] === '(') {
             stack.push(i);
         } else if (sArr[i] === ')') {
             if (!stack.length) {
                 sArr[i] = '*';
             } else {
                 stack.pop();
             }
         }
     }
 
     while (stack.length) {
         sArr[stack.pop()] = '*';
     }
 
     return sArr.filter(c => c !== '*').join('');
 };
//  Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"