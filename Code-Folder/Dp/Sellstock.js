var maxProfit = function(prices) {
    let min = prices[0];
    let profit=0;
    for(let i=1;i<prices.length;i++){
        let cost = prices[i]-min;
        profit = Math.max(profit,cost);
        min=Math.min(min,prices[i]);
    }
    return profit;
};