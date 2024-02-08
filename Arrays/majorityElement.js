/**

    Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?

 */

 function majorityElement(nums) {

    const n = nums.length;

    const map = new Map();

    for(let i=0; i<nums.length; i++){

        let num = nums[i];

        if(map.has(nums[i])){
            map.set(num, map.get(num)+1);
        } else {
            map.set(num, 1);
        }
    }

     for (const [num, count] of map) {
        if (count > Math.floor(n / 2)) {
            return num;
        }
    }

    return -1;

    
    
 }


 let nums = [2,2,1,1,1,2,2]
 console.log(majorityElement(nums))
  

