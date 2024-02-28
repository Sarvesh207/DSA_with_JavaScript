// function singleOccurence(arr) {
//     let obj = {};

//     for(let i=0; i<arr.length; i++){
//         if(obj[arr[i]]){
//             obj[arr[i]] += 1
//         } else {
//             obj[arr[i]] = 1;
//         } }
//     return obj;
// }

function Occurence(arr){
    let result = 0;

    for(let i=0; i<arr.length; i++){
        result ^=  arr[i];
    }

    return result;
}

let arr = [1, 1, 4, 4, 99, ];

console.log(Occurence(arr));