function secondLargestNumber(arr) {
  if (arr.length < 2) return "Array length must be greater then 2";
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity
    ? "No Second largest element found"
    : secondLargest;
}

console.log(secondLargestNumber([0, 3, 5, 2, 7, 9, 8])); // 7
