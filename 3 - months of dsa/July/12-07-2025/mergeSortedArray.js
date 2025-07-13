function mergeSortedArray(nums1, m, nums2, n) {
  debugger;
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1--];
    } else {
      nums1[i] = nums2[p2--];
    }
  }
  console.log(nums1);
}

let n1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let n = 3;
let n2 = [2, 5, 6];

mergeSortedArray(n1, m, n2, n);
