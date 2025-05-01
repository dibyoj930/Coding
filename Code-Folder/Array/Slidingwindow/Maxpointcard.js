


var maxScore = function(cardPoints, k) {
    const n = cardPoints.length;
   const windowSize = n - k;
   let total = cardPoints.reduce((a, b) => a + b, 0);

   if (k === n) return total; // Edge case: take all cards

   // Find minimum subarray sum of size (n - k)
   let minSubSum = 0;
   for (let i = 0; i < windowSize; i++) {
       minSubSum += cardPoints[i];
   }

   let currentSum = minSubSum;
   for (let i = windowSize; i < n; i++) {
       currentSum += cardPoints[i] - cardPoints[i - windowSize];
       minSubSum = Math.min(minSubSum, currentSum);
   }

   return total - minSubSum;
};


// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
//approach is to get the minimum sum for rest of the array part and subtracxt from the total sum 
//so that we get the maxsum from window part.

