var longestValidParentheses = function(s) {
    let stack=[];
    let ans=0;
    stack.push(-1);
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            stack.push(i);
        }
        else{
            if(stack.length){
                stack.pop();
            }
            if(stack.length){
                ans=Math.max(ans,i-stack[stack.length-1]);
            }else{
                stack.push(i)
            }
        }
    }
    return ans;
};
// Input: s = ")()())"
// Output: 4