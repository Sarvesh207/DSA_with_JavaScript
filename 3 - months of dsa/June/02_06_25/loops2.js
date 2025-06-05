//  Write a function the searched for an element and return its index

let arr = [1, 2, 3, 4, 6, 7];

let x = 9;

function findElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }

  return -1;
}

let ans = findElement(arr, x);

console.log("Ans : ", ans);
