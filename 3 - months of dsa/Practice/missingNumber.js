function findMissingNumber(arr) {
  let totalSum = 0;
  let n = arr.length;
  let partialSum = 0;

  totalSum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    partialSum = partialSum + arr[i];
  }

  return totalSum - partialSum;
}

let arr = [3, 0, 1, 4,5];

console.log(findMissingNumber(arr));
