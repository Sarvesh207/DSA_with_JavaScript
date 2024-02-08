function findSum(A, N) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let i = 0; i < N; i++) {
        if (A[i] > max) {
            max = A[i];
        }

        if (A[i] < min) {
            min = A[i];
        }
    }

    return [max, min]
}


let nums = [-1, -2, -3, -4, -5];


console.log(findSum(nums, 5))




