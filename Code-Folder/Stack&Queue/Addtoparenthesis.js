var minAddToMakeValid = function(s) {
    let stack=[];
    let ans=0;
    for(let key of s){
        if(key=="("){
            stack.push(key);
        }else{
            if(stack.length>0){
                stack.pop();
            }else{
                 ans++;
            }
        }
    }
    return stack.length+ans;
};
// Example 1:

// Input: s = "())"
// Output: 1
// Example 2:

// Input: s = "((("
// Output: 3