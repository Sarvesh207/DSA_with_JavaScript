// function moveAllZeroToEnd(arr){
//     let temp = [];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== 0){
//             temp.push(arr[i])
//         }
        
//     }

//     let nz = temp.length;
//     for(let i=0; i<nz; i++){
//         arr[i] = temp[i];
//     }

//     for(let i=nz; i<arr.length; i++){
//         arr[i] = 0;
//     }

//     return arr;
// }

// let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
// // console.log(arr)
// console.log(moveAllZeroToEnd(arr));

//  optimal approch

function moveZerosToEnd(arr){

    let j = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            j = i;
            break;
        }
    }

    console.log("value indx of j, ",j);
    

    for(let i=j+1; i<arr.length; i++){
        if(arr[i] !== 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
            j++;
        }
    }
    return arr;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

console.log(moveZerosToEnd(arr));

