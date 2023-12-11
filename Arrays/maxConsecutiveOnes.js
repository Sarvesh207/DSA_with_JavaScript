function maxConsecutiveOnes(nums){
    let finalAns = 0;
    let consecutiveOnes = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] == 1){
            consecutiveOnes++;
        } else {
            
            finalAns = Math.max(finalAns, consecutiveOnes);
            consecutiveOnes = 0;
        }
    }

    finalAns =  Math.max(finalAns, consecutiveOnes);
    return finalAns;


}


let nums = [1,1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
let result = maxConsecutiveOnes(nums);

console.log(result)