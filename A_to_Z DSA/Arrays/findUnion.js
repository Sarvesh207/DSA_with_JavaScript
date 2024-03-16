// function findUnionofArray(a, b){

//     let union = new Set();

//     for(let i=0;  i<a.length; i++){

//         union.add(a[i])

//     }

//     for(let i=0;  i<b.length; i++){

//         union.add(b[i])

//     }

//     console.log(union)

// }

// let arr1 = [1,2,3,4,5];
// let arr2 = [2,3,4,4,5];

// findUnionofArray(arr1, arr2)

//  optimal approch

function unionArray(a, b) {
  let n = a.length;
  let m = b.length;
  let i = (j = 0);
  let union = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      if (union.length === 0 || union[union.length - 1] !== a[i]) {
        union.push(a[i]);
      }
      i++;
      
    } else if (a[i] === b[j]) {
        if(union.length === 0 || union[union.length - 1] !== b[i]){
            union.push(a[i]);
        }
        j++;
    }
  }


  while(i < a.length){
    if(union[union.length - 1] !== a[i]){
        union.push(a[i])
    }
    i++;
  }

  while(j < b.length){
    if(union[union.length - 1] !== b[j]){
        union.push(b[j])
    }
    j++;
  }

  return union;
}


//              i
let arr1 = [1, 2, 3, 4, 5];
//
let arr2 = [2, 3, 4, 4, 5];
//  union = [1,2,3];

console.log(unionArray(arr1, arr2))


