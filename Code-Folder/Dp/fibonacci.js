const Fibo=(n)=>{
    if(n<=1)return n;
    let fibo = new Array(n+1);
    fibo[0]=0;
    fibo[1]=1;
    for(let i=2;i<=n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo[n];

}
const Fibo2 = (n) => {
    if (n <= 1) return n;
    return Fibo(n - 1) + Fibo(n - 2);
  };
console.time()
console.log(Fibo(50))
console.timeEnd();