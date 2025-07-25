/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;

  let sum = (n * (n + 1)) / 2;

  let partialSum = 0;

  for (let i = 0; i < nums.length; i++) {
    partialSum += nums[i];
  }

  return sum - partialSum;
};
