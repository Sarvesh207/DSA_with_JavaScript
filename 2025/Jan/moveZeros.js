/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const newArray = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            newArray.push(nums[i]);
        }
    }


    let nz = newArray.length;

    for(let i=0; i<nz; i++){
        nums[i] = newArray[i];
    }

    for(let i=nz; i<nums.length; i++){
        nums[i] = 0;
    }
};