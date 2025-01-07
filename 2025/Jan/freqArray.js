function printFreqArr(arr) {
  let visited = new Array(5).fill(false);
  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        visited[j] = true;
        count++;
      }
    }

    console.log(arr[i], ":", count);
  }
}

let arr = [2, 3, 4, 2, 5, 3];

printFreqArr(arr);

//  solution
/**
 * 2:2
 * 3:2
 * 4:1
 * 5:1
 */
