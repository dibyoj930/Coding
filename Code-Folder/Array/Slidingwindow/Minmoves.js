const minMoves2 = (nums) => {
    nums.sort((a, b) => a - b); //! sort the array
    mid = nums[Math.floor(nums.length / 2)]; //! get the middle element
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      const need_to_get = mid - nums[i]; //! get the difference between the middle element and the current element
      count += Math.abs(need_to_get);
    }
    return count;
  };
  //input ->[1,2,10,9]
  //16