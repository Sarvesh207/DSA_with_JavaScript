/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const newArray = [];
  // for(let i=0; i<nums.length; i++){
  //     if(nums[i] !== 0){
  //         newArray.push(nums[i]);
  //     }
  // }

  // let nz = newArray.length;

  // for(let i=0; i<nz; i++){
  //     nums[i] = newArray[i];
  // }

  // for(let i=nz; i<nums.length; i++){
  //     nums[i] = 0;
  // }

  //  allocate j to first zero element

  let j = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return nums;

  for (let i = j + 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // when nums[i] will be non zero element
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
};

let nums = [0, 1, 0, 3, 1, 2];

console.log(moveZeroes(nums));
