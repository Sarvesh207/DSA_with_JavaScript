let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]


function printColumn(arr, m, n){
    let str = "";
    for(let col=0; col<n; col++){
        if(col % 2 == 0){
            for(let row=0; row<m; row++){
                str += arr[row][col] + ","
            }
        } else {
            for(let row=m-1; row>=0; row--){
                str += arr[row][col] + ","
            } 
        }
    }
    console.log(str);
}

printColumn(arr, 4, 4);
