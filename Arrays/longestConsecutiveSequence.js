function linerSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return true;
  }
  return false;
}
function longestConsecutiveSequence(arr) {
  let n = arr.length;
  let longest = 1;

  for (let i = 0; i < n; i++) {
    let x = arr[i];

    let count = 1;

    while (linerSearch(arr, x + 1) === true) {
      x = x + 1;
      count = count + 1;
    }

    longest = Math.max(longest, count);
  }

  return longest;
}

// let arr = [100, 200, 1, 2, 3, 4];
// let ans = longestConsecutiveSequence(arr);
// console.log("The longest consecutive sequence is", ans);

//  Optimal

function longestConsecutiveSequenceBetter(arr) {
  let n = arr.length;
  if (n == 0) return;

  arr.sort((a, b) => a - b);
  let lastSmaller = -Infinity;
  let cnt = 0;
  let longest = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] - 1 === lastSmaller) {
      cnt += 1;
      lastSmaller = arr[i];
    } else {
      if (arr[i] !== lastSmaller) {
        cnt = 1;
        lastSmaller = arr[i];
      }
    }

    longest = Math.max(longest, cnt);
  }

  return longest;
}

// let arr = [100, 200, 1, 2, 3, 4];
// let ans = longestConsecutiveSequenceBetter(arr);
// console.log("The longest consecutive sequence is", ans);

function longestConsecutiveSequenceOptimal(arr) {
  let n = arr.length;

  if (n === 0) {
    return 0;
  }

  let longest = 1;
  let st = new Set();

  for (let i = 0; i < n; i++) {
    st.add(arr[i]);
  }

  for (let it of st) {
    if (!st.has(it - 1)) {
      cnt = 1;
      let x = it;

      while (st.has(x + 1)) {
        cnt += 1;
        x = x + 1;
      }
    }

    longest = Math.max(longest, cnt);
  }

  return longest;
}

let arr = [100, 200, 1, 2, 3, 4];
let ans = longestConsecutiveSequenceOptimal(arr);
console.log("The longest consecutive sequence is", ans);
