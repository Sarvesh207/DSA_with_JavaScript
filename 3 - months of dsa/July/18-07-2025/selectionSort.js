function selectionSort(arr) {
    for(let i = 0; i<arr.length; i++){

        let min = i;

        for(let j = i+1; j<arr.length; j++){

            if(arr[j] < arr[min]){
                min = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr
    }
}

let arr = [2, 3, 4, 5, 9, 1];
