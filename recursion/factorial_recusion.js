function f(n) {
    if (n === 1) return 1;

    return n * f(n - 1);
}

console.log(f(5));

// function factorical(n) {

//     let facto = 1;
//     for(let i=n; i>0; i--){
//         facto  *= i
//     }

//     return facto;
// }

// console.log(factorical(5))