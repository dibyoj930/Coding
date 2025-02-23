function Factor(n){
    if(n==1)return [];
    let temp=[];
    let ans=[];
    let index=2;
    let pdt=1;
    function backtrack(temp,idx,pdt){
        if(pdt>n){
            return;
        }
        if(pdt==n){
        ans.push([...temp])
        return
        }
        for(let i=idx;i<=Math.floor(n/pdt);i++){
            if(n%i==0&&i!=n){
            temp.push(i);
            backtrack(temp,i,pdt*i);
            temp.pop();
            }
        }

    }
    backtrack(temp,index,pdt)
    return ans;
}
console.log(Factor(12))