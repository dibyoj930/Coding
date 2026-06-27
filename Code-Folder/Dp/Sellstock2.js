function Recursive(ind,buy,p,n,dp){
    if(ind==n)return 0;
    if(dp[ind][buy]!=-1)return dp[ind][buy];
    let profit=0;
  
    if(buy){
       profit = Math.max(-p[ind]+Recursive(ind+1,0,p,n,dp),
       Recursive(ind+1,1,p,n,dp));
    }else{
        profit = Math.max(p[ind]+Recursive(ind+1,1,p,n,dp),Recursive(ind+1,0,p,n,dp));
    }
    return dp[ind][buy]=profit;
}
var maxProfit = function(prices) {
    let n=prices.length;
    let dp = new Array(prices.length).fill().map(()=>new Array(2).fill(-1));
    return Recursive(0,1,prices,n,dp);
};