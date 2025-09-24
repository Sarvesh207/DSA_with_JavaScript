/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split("");

  for (let i = 0; i < s.length; i = i + (2 + k)) {
    let n = k;

    for (let j = 0; j < n / 2; j++) {
      let temp = s[j + i];
      s[i + j] = s[n + i - 1 - j];
      s[n + i - 1 - j] = temp;
    }
  }

  return s.join("");
};
