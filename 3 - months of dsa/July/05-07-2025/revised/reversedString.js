/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  // let left = 0;
  // let right = s.length-1;

  // while (left <= right) {
  //     let temp = s[left];
  //     s[left] = s[right];
  //     s[right] = temp;

  //     left++;
  //     right--;
  // }

  let arrLength = s.length;
  let halfLength = Math.floor(arrLength / 2);

  for (let i = 0; i < halfLength; i++) {
    let temp = s[i];
    s[i] = s[arrLength - 1 - i];
    s[arrLength - 1 - i] = temp;
  }
};
