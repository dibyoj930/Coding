
function  calculate(m,n,num){
    let q=[];
    q.push(num);
    let count=0;
    while(q.length){
        let data=q.shift();
        if(data>=m&&data<=n)count++;
        if(data==0||data>n)continue;
        let last=data%10;
        let step1=data*10+(last+1);
        let step2=data*10+(last-1);
        if(last==0)q.push(step1);
        else if(last==9)q.push(step2);
        else{
            q.push(step1);
            q.push(step2)
        }
    }
    return count
}

function Step(m,n){
    let ans=0;
    for(let i=0;i<=9;i++){
        ans+=calculate(m,n,i)
    }
    return ans;
}
console.log(Step(10,15))