var evalRPN = function(tokens) {
    let arr=[];
    for(let i of tokens){
        if(i=="+"){
            let a=arr[arr.length-1];
            arr.pop();
            let b=arr[arr.length-1];
            arr.pop();
            arr.push(a+b);
        }else if(i=="-"){
            let a=arr[arr.length-1];
            arr.pop();
            let b=arr[arr.length-1];
            arr.pop();
            arr.push(b-a);
        }else if(i=="*"){
            let a=arr[arr.length-1];
            arr.pop();
            let b=arr[arr.length-1];
            arr.pop();
            arr.push(a*b);
        }
        else if(i=="/"){
            let a=arr[arr.length-1]
            arr.pop();
            let b=arr[arr.length-1];
            arr.pop();
            arr.push(Math.trunc(b/a));
        }else{
            arr.push(Number(i));
        }
    }
    return arr.pop();
};