/**
 * arr = [0,0,1,1,2,2,3,3,4]
 * output =  5 number of unique element    [0,1,2,3,4]
 *
 *    x
 * [0,0,1,1,2,2,3,3,4]
 *      i
 *  0 1 2 3 4 5 6 7 8
 */

function removeDublicateElements(arr) {


    // optimize approch
//   let x = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[x]) {
//       x++;
//       arr[x] = arr[i];
//     }
//   }


let uniqueElement = new Set();
  for(let i=0; i<arr.length; i++){

    uniqueElement.add(arr[i]);

  }
  console.log(uniqueElement)
  return uniqueElement.size;
}

let arr = [0,0,1,1,2,2,3,3,4]

console.log(removeDublicateElements(arr))
