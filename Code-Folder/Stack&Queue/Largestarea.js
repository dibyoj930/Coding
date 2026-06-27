var largestRectangleArea = function(heights) {
    let stack=[];
    let ans=0;
    let i=0;
    while(i<heights.length){
        if(stack.length==0||heights[stack[stack.length-1]]<=heights[i]){
            stack.push(i);
            i++;
        }
        else{
            let top = stack[stack.length-1];
            stack.pop();
            let maxans = heights[top]*(stack.length>0?i-stack[stack.length-1]-1:i);
            ans=Math.max(ans,maxans);
        }
    }
    while(stack.length){
        let top = stack[stack.length-1];
            stack.pop();
            let maxans = heights[top]*(stack.length>0?i-stack[stack.length-1]-1:i);
            ans=Math.max(ans,maxans);
    }
    return ans;
};
// Input: heights = [2,1,5,6,2,3]
// Output: 10