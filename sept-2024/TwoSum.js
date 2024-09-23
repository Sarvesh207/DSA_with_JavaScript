/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


    // 1st approch
    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(nums[i]+nums[j] === target){
    //             return [i,j]
    //         }
    //     }
    // }


    // 2nd approch
    const map= {}
    for(let i=0; i<nums.length; i++){
        const moreNeeded = target - nums[i];
        if(map[moreNeeded] !== undefined){
            return [map[moreNeeded], i]
        } 

        map[nums[i]] = i
    }
};