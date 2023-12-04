/**
 * when to use map ?
 * 
 * In any situation when we have to add do an operation on every element of the array anf store the result of each the result of each operation map can be good option  
 *  for example 
 * Array of Product Objects 
 */

let arr = [1,3,4,5,6,7,8,9];
arr.map((elem, index) => {
    console.log(elem, index)
})


