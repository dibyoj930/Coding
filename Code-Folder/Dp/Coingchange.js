var coinChange = function(coins, amount) {
    if(amount<1)return 0;
    let mincoin = new Array(amount+1).fill(Infinity);
    mincoin[0]=0;
    for(let i=1;i<=amount;i++){
        // mincoin[i]=Infinity;
        for(let c of coins){
            if(c<=i&&mincoin[i-c]!=Infinity){
                mincoin[i]=Math.min(mincoin[i],1+mincoin[i-c]);
            }
        }
      
    }
      if(mincoin[amount]==Infinity)return -1;
        return mincoin[amount];
};