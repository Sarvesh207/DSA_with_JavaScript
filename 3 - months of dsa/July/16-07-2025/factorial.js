let n = 5;

// 5 * 4 * 3 * 2 * 1;   ans will be 120

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}


console.log(factorial(10));



