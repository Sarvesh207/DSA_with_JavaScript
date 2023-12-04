let arr = [2,3,4,5,6,7,7,8];

let result = arr.filter((ele, idx) => {
    return ele % 2 != 0;
})

console.log(result)