function maxConsecutiveOne(nums) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(max, count);
  }

  return max;
}

let nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];

console.log(maxConsecutiveOne(nums));
