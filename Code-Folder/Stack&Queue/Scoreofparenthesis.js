var scoreOfParentheses = function(s) {
    
    const stack = [0];

    for(let char of s){
        if(char === '('){       //if found '(' push 0 in stack.
            stack.push(0);
        }else{                  //found ')'.
            if(stack[stack.length -1] === 0){   // if top elemnt is 0
                stack.pop();    // pop the top
                stack[stack.length -1] += 1;    //add 1 to the now top.
            }else{              //top elemnt is not 0
                let popped = stack.pop();       //pop the top 
                //multiply poped element with 2 and add it to the now top element of stack.
                stack[stack.length -1] = stack[stack.length -1] + popped * 2;
            }
        }

    }

    return stack.pop();         //return top element of stack.
};

// Input: s = "(())"
// Output: 2
// Example 3:

// Input: s = "()()"
// Output: 2