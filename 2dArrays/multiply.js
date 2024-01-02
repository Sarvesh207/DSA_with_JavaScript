function multuiplyMatrix (a, m, n, b,n , k){
    let c = new Array(m);
    for(let i=0; i<m; i++){
        c[i] = Array(k).fill(0)
    }


    for(let i=0; i<m; i++){
        for(let j=0; j<k; j++){
            for(let x = 0; x < n; k++){
                c[i][j] += a[i][x] * b[x][j]
            }
        }
    }

}