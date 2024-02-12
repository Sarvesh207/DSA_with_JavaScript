
// function F(n){
//     if(n == 1 || n == 0) return n;
//     return F(n-1)+F(n-2);
// }

// console.log(F(4))

// first 10 fibonacchi number

function f (n){
    let fib = [];

    fib[0] = 1
    fib[1] = 1;

    for(let i=2; i<n; i++){
        fib[i] = fib[i-1]+fib[i-2];
    }

    return fib;
}

console.log(f(5))

// function fibonacciSequence(count) {
//   let fib = [];
//   fib[0] = 1;
//   fib[1] = 1;
//   for (let i = 2; i < count; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// let result = fibonacciSequence(10);
// console.log(result)