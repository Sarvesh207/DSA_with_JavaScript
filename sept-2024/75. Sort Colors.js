// better solutions

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // nums.sort((a, b) => a-b)
     let cnt0 = 0, cnt1 = 0, cnt2 = 0;
     let n = nums.length;

    // Count the number of 0s, 1s, and 2s
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) cnt0++;
        else if (nums[i] === 1) cnt1++;
        else cnt2++;
    }

    // Replace elements in the original numsay
    for (let i = 0; i < cnt0; i++) nums[i] = 0;  // Replace 0s
    for (let i = cnt0; i < cnt0 + cnt1; i++) nums[i] = 1;  // Replace 1s
    for (let i = cnt0 + cnt1; i < n; i++) nums[i] = 2;  // Replace 2s
}

//  optimal approch approch
