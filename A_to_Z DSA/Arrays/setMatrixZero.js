let arr = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

function markRow(arr, n, i) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] !== 0) {
      arr[i][j] = -1;
    }
  }
}

function markColumn(arr, m, j) {
  for (let i = 0; i < m; i++) {
    if (arr[i][j] !== 0) {
      arr[i][j] = -1;
    }
  }
}
function setMatrixZero(arr, n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        markRow(arr, n, i);
        markColumn(arr, m, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === -1) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
}

// setMatrixZero(arr, 3, 3);

console.log(setMatrixZero(arr, 3, 3));
