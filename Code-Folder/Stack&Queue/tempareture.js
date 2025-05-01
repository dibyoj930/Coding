var dailyTemperatures = function(temperatures) {
    let stack=[];
    let ans=new Array(temperatures.length).fill(0);
    for(let i=0;i<temperatures.length;i++){
        while(stack.length&&temperatures[stack[stack.length-1]]<temperatures[i]){
            ans[stack[stack.length-1]]=i-stack[stack.length-1];
            stack.pop();
        }
        stack.push(i);
    }
    return ans;
};