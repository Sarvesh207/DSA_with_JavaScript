function getSecondLargest(arr) { 
    
    


   /** Second largest OPtimal Approch */
        
    if(arr[0] === arr[1]){
        return -1;
    }
 
    let large =-Infinity;
    let second_Large = -Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > large){
            second_Large = large;
            large = arr[i];
        } else if( arr[i] > second_Large &&  arr[i] !== large){
            second_Large = arr[i]
        }
    }
    
    
    return second_Large;
    

}    