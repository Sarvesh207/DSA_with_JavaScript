function rotateByDPlaces(arr, d) {

  let n = arr.length;
  let temp = [];
  d = d % n;

  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }

  for (let j = d; j < arr.length; j++) {
    arr[j - d] = arr[j];
  }

  let t = 0;
  for (let i = n - d; i < arr.length; i++) {
    arr[i] = temp[t];
    t++;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 3;

console.log(rotateByDPlaces(arr, d));
// o/p = [4, 5, 6, 1, 2, 3]
