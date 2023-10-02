let n = 3;

function printPattern(n) {
    for(let row = 1; row <= n; row++){
        let str = "";
        for (let col = 1; col <= n; col++){
            str += "*";
        }
        console.log(str);
    }
}

printPattern(n);