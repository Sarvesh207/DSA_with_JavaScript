/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    //  brute force solution
//   let isDublicate = false;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         isDublicate = true;
//         return isDublicate;
//       }
//     }
//   }

//   return false;



//  optimal solution

    const elementTracker = {};

    for( let num of nums){
        if(elementTracker[num]){
            return true;
        }

        elementTracker[num] = true;
    }

    return false;
};
