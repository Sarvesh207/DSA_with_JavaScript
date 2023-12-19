let grid = [[1,2,3],[4,5,6],[7,8,9],[5,3,4]]
console.log(grid)
// lets make 5*6 array
let arr = Array(5);
for(let i=0; i<6; i++){
    let inner = Array(6).fill(0);
    arr[i] = inner;
}

arr[0][0] = 11;
arr[0][1] = 12;

console.log(arr);