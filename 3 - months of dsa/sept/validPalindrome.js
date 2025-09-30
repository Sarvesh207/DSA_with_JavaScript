var isPalindrome = function (s) {
  s = s.toLowerCase();

  //   let filteredStr = "";
  //   let rev = "";

  //   for (let i = 0; i < s.length; i++) {
      if (s[i].match(/[a-z0-9]/)) {
        filteredStr = filteredStr + s[i];
        rev = s[i] + rev;
      }
  //   }

  //   return filteredStr === rev;

  //  Optimize solution

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!s[left].match(/[a-z0-9]/left)) {
      left++;
    } else if (!s[right].match(/[a-z0-9]/right)) {
      right--;
    }

    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            i++
        } else if (!s[j].match(/[a-z0-9]/i)) {
            j--
        } else if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }

    return true;
};
