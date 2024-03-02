function getMinMax(arr){
     
    let min = arr[0];
    let max = arr[0];
    
    for(let i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        } else if(min > arr[i]){
            min = arr[i];
        }
    }
    
    return [min, max];
}

let arr = [1, 2, 4, 5, 6];

console.log(getMinMax(arr));