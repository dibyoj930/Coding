function threeSum(nums) {
    const result = new Set();      // to store unique triplets as strings
    const seen = new Map();        // to track complements
    nums.sort((a, b) => a - b);    // sort for consistency and deduplication

    for (let i = 0; i < nums.length; i++) {
        seen.clear();
        for (let j = i + 1; j < nums.length; j++) {
            const complement = -(nums[i] + nums[j]);
            if (seen.has(complement)) {
                const triplet = [nums[i], complement, nums[j]].sort((a, b) => a - b);
                result.add(triplet.toString()); // convert to string for Set uniqueness
            }
            seen.set(nums[j], j); // mark as seen
        }
    }

    // Convert strings back to number arrays
    return Array.from(result).map(item => item.split(',').map(Number));
}

//o(n^2) approach

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
}
//optimized approach
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]