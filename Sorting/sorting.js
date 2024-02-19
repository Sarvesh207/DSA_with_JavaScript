function getMinIdx(arr, i) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    return minIdx;
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = getMinIdx(arr, i);
        console.log(minIdx);
        
        if (minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}


let arr = [11, -1, 2, 6, 9];
console.log(arr);
selectionSort(arr);
console.log(arr);
