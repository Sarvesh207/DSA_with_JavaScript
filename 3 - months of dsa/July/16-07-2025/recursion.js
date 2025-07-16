//  Recursion revise
function sum(n) {
  if (n == 0) return 0;

  return n + sum(n - 1);
}

console.log(sum(5));

//  Sum for all elements of array
function sum1(arr, n) {
  if (n === 0) return arr[0];

  return arr[n] + sum(arr, n - 1);
}

let arr = [5, 3, 2, 6, 1];
let n = arr.length - 1;
console.log(sum(arr, n));

//  Sum for all elements of array
function sum1(arr, n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n === 0) return isOdd ? arr[0] : 0;

  return isOdd ? arr[n] : 0 + sum(arr, n - 1);
}

let arr1 = [5, 3, 2, 6, 1];
let n1 = arr.length - 1;
console.log(sum(arr1, n1));




