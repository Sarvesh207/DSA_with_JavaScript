function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let prev = i - 1;
    let curr = arr[i];

    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev+1] = curr
  }

  return arr;
}

let arr = [4, 5, 1, 3, 9];

console.log(insertionSort(arr))
