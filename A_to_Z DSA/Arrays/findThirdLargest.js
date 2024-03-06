function thirdLargest(arr){
    let max = Math.max(arr[0],arr[1]);
    let secondMax = Math.min(arr[0], arr[1]);
    let thirdMax = Number.MIN_VALUE;

    for(let i=2; i<arr.length; i++){
        if(arr[i] > thirdMax){
            thirdMax = arr[i]
        }
        if(arr[i] > secondMax){
            thirdMax = secondMax;
            secondMax = arr[i];
        }

        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
        
    }

    return thirdMax;
}


let arr = [1, 3, 4, 5, 6, 7, 9]
console.log(thirdLargest(arr))