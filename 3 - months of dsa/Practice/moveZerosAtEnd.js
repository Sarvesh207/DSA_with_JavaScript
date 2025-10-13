function moveZerosAtEnd(nums) {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx++] = nums[i];
    }
  }

  while (idx < nums.length) {
    nums[idx] = 0;
    idx++;
  }
  console.log(nums);
  return nums;
}

let nums = [0, 1, 0, 3, 12];

console.log(moveZerosAtEnd(nums));
