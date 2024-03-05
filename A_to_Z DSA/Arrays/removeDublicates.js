// function removeDubli(arr) {
//   let unique = new Set();

//   let uniqueCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     unique.add(arr[i]);
//   }

//   return unique.size;
// }

// let arr = [1, 1, 2, 3, 4, 4, 5, 6];

// console.log(removeDubli(arr));

//  Optimal approch to find unique count in array

function removeDublicateElements(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
}
let arr = [1, 1, 2, 2, 3, 4, 5];
console.log(removeDublicateElements(arr));
