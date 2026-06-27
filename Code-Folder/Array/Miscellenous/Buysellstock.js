function Sell(){
    let a=prices[0];
        let profit=0;
        for(let i=1;i<prices.size();i++){
            let diff=prices[i]-a;
            profit=max(profit,diff);
            a=min(a,prices[i]);
            
        }
        return profit;
}
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.