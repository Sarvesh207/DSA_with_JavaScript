// const obj1 = {}
// // obj1.name = "sarvesh"
// obj1["1"]= "sarvesh";
// console.log(obj1)

function NumsFreq(nums) {
    // approch 1
    const freqObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (freqObj[nums[i]] === undefined) {
            freqObj[nums[i]] = 1;
        } else {
            freqObj[nums[i]]++;
        }
    }

    for (const key in freqObj) {
        if (freqObj[key] === 1) {
            return key;
        }
    }
    return freqObj;

    // approch 2
    // let result = 0;
    // for(let i=0; i<nums.length;i++){
    //     result = result ^ nums[i];
    // }

    // return result;
}

let nums = [4, 1, 2, 1, 2];

console.log(NumsFreq(nums));
