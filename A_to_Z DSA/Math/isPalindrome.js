
function isNumPalindrome(num) {
  let revNum = 0;
  let originalNum = num; // To store a copy of the original number

  while (num > 0) {
    let digit = num % 10;
    
    revNum = revNum * 10 + digit;
    console.log(revNum);
    
    num = Math.floor(num / 10); // Using integer division to get the next number
  }
  
  // Now, after the while loop, compare the reversed number with the original number
  if (originalNum === revNum) {
    return true; // It's a palindrome
  } else {
    return false; // It's not a palindrome
  }
}

let num = 1213;
console.log(isNumPalindrome(num));