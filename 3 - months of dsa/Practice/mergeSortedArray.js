function mergeSortedArray(nums1, m, nums2, n) {
  let ansArray = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < m && p2 < n) {
    if (nums1[p1] <= nums2[p2]) {
      ansArray.push(nums1[p1]);
      p1++;
    } else {
      ansArray.push(nums2[p2]);
      p2++;
    }
  }

  while (p1 < m) {
    ansArray.push(nums1[p1]);
    p1++;
  }

  while (p2 < n) {
    ansArray.push(nums2[p2]);
    p2++;
  }

  return ansArray;
}

function mergeSortedArrayOptimal(nums1, m, nums2, n) {
  let ansArray = [];
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && nums[p1] > nums[p2]) {
      nums1[i] = nums1[p1--];
    } else {
      nums1[i] = nums2[p2--];
    }
  }

  return nums1;
}
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(mergeSortedArray(nums1, m, nums2, n));
