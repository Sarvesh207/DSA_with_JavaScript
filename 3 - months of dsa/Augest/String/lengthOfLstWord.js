/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let n = s.length - 1;

  while (n >= 0) {
    if (s[n] !== " ") {
      break;
    }
    --n;
  }

  let count = 0;
  while (n >= 0) {
    if (s[n] === " ") {
      break;
    }
    count++;
    --n;
  }

  return count;
};
