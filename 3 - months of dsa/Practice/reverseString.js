// brute-force using js function reverse()

// function reverseStringI(s){
//     s.reverse()
// }

//  using two pointer
function reverseStringII(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[right];
    s[right] = s[left];
    s[left] = temp;

    left++;
    right--;
  }
  return str;
}

function reverseString(str) {
  let n = str.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = str[i];
    str[i] = str[n - i - 1];
    str[n - i - 1] = temp;
  }

  return str;
}

let str = ["h", "e", "l", "l", "o"];

console.log(reverseString(str));
