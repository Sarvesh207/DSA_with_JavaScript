function removeElement(arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
        arr[x] = arr[i];
        x++;
    }
  }

  return x;
}

console.log(removeElement([3,2,2,3], 3))

// x 
// let arr = [3,2,2,3];   val = 3 op - [2,2]
//              i
