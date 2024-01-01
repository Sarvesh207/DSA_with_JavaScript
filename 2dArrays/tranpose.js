const tranpose = function(matrix){
    let result = Array(matrix.length);

    for(let i = 0; i< matrix.length; i++){
        let arr = Array(matrix[i].length);
        result[i] = arr;
    }

    for(let row = 0; row<matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            matrix[row][col] = result[col][rpw];
        }
    }

    return result;
}