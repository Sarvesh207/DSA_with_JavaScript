frequencyCount(arr) {
    // code here
   
    let numbers = new Array(arr.length).fill(0); 

    // Count the frequency of each number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] <= arr.length) {
            numbers[arr[i] - 1]++;
        }
    }
    
    return numbers;
}