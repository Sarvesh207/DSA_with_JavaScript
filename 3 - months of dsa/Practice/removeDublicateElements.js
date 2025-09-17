function removeDublicate(nums) {
  let unSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    unSet.add(nums[i]);
  }

  return [...unSet];
}

let nums = [1, 1, 2];

console.log(removeDublicate(nums));
