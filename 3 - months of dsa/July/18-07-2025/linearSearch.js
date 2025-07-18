let arr = [1, 2, 3, 4, 5];

let n = 4;

function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      return i;
    }
  }
  return false;
}

console.log(linearSearch(arr, n));
