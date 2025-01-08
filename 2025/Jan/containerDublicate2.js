// var containsNearbyDuplicate = function(nums, k) {
//     for(let i=0; i<=nums.length; i++){
//         for(let j=i+1; j<=nums.length; j++){
//             if(nums[i] === nums[j] && Math.abs(i-j) <= k) return true;
//         }
//     }
//     return false;
// };


for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(i - map.get(nums[i])) <= k) {
        return true; // found a duplicate within the range
    }
    map.set(nums[i], i); // store the index of the current element

    // Remove elements that are more than k distance away from the current index
    if (i >= k) {
        map.delete(nums[i - k]);
    }
}