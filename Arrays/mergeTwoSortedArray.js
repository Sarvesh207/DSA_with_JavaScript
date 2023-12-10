function twoMergeSortedArray(nums1, m, nums2, n){
    let result = Array(m+n).fill(0);
    let i = 0;
    let j = 0;
    let k = 0

    while(i <= m && j <= n){
        if(nums1[i] < nums2[j]){
            result[k++]  = nums1[i++];
        } else {
            result[k++] = nums2[j++];
        }
    }

    while(i <= m){
        
        
        result[k++]  = nums1[i++];
        
    }

    while(j <= n){
        result[k++] = nums2[j++];
    }

    return result;
}

let num1 = [1, 2, 3, 4];
let num2 = [5,6, 7, 8, 9];
let m = num1.length-1;
let n = num2.length-1;
console.log(twoMergeSortedArray(num1, m, num2, n))



