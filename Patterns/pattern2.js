let n = 4;
function patterPrint1(n){
    for(let row = 0; row<=n; row++){
        let str = "";
        for(let col = 0; col<=row; col++){
            str += "*";
        }
        console.log(str+" ");
    }
}

patterPrint1(n);