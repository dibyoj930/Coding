function maxSubarraySum(nums,k) {
    if (nums.length < k) return 0;

    let maxSum = 0;
    let windowSum = 0;

    // Initial window sum
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}
