let arr =  [1, 2, 3, 4, 5]

const result = arr.reduce((prev, curr) => {
     return curr += prev ;
}, 0)

console.log(result)