let arr = [2,4,5,3,9];

function sLargestElement(arr){
    fLargest = arr[0];
    sLargest = -1;


    for(let i=0; i<arr.length; i++){
        if(fLargest < arr[i]){
            fLargest = arr[i];
        }
    }


    for(let i=0; i<arr.length; i++){
        if(sLargest < arr[i] && arr[i] !== fLargest ){
            sLargest = arr[i];
        }
    }

    console.log(sLargest, fLargest);

}

sLargestElement(arr);