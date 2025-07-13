/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // let newArray = [];

  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] != 0) {
  //         newArray.push(nums[i]);
  //     }
  // }

  // while(newArray.length < nums.length){
  //     newArray.push(0);
  // }

  // for(let i=0; i<nums.length; i++){
  //     nums[i] = newArray[i];
  // }

  //  Better Approch

  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[idx++] = nums[i];
    }
  }

  while (idx !== nums.length) {
    nums[idx++] = 0;
  }
};
