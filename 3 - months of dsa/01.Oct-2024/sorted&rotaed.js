function check(nums) {
    let countRotations = 0;
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        // Check if the current element is greater than the next element
        if (nums[i] > nums[(i + 1) % n]) {
            countRotations++;
        }
        
        // If there is more than one "rotation point", return false
        if (countRotations > 1) {
            return false;
        }
    }
    
    return true;
}
