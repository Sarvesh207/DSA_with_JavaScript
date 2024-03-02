let nums = [1,1,2];

function removeDublicates(arr){
    let j = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] !== arr[j]){
            j++;
            arr[j] = arr[i]
        }
    }

    
}