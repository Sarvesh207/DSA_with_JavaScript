function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function seperate(arr){
    let i = 0;
    let j = arr.length-1;
    while(i <= j){
        //till the time i and j have not passed each other
        if(arr[i] == 1){
            swap(arr, i, j);
            
            j--; // include the new 1 we have threw in the right window
        } else {
            i++;  // expand the left window directly
        }
    }
}

let arr = [1, 1, 1, 0, 1, 0, 0,0, 1,0, 1];
seperate(arr);
console.log(arr);