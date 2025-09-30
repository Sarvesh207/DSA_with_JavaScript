var isPalindrome = function (s) {
  s.toLowerCase();

  let filteredStr = "";
  let rev = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/)) {
      filteredStr = filteredStr + s[i];
      rev = s[i] + rev;
    }
  }

  return filteredStr === rev;
};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
