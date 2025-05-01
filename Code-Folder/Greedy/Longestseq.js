function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        // Start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    return maxLength;
}


console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));  // Output: 4
