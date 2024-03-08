// function rotateByDPlaces(arr, d) {

//   let n = arr.length;
//   let temp = [];
//   d = d % n;

//   for (let i = 0; i < d; i++) {
//     temp[i] = arr[i];
//   }

//   for (let j = d; j < arr.length; j++) {
//     arr[j - d] = arr[j];
//   }

//   let t = 0;
//   for (let i = n - d; i < arr.length; i++) {
//     arr[i] = temp[t];
//     t++;
//   }

//   return arr;
// }


function reverse(arr, start, end){
  while(start < end){
	let temp = arr[start];
	arr[start] = arr[end]
	arr[end] = temp;
	start++;
	end--;

  }
}

function rotateArrByDPlaces(arr, d){
	let n  = arr.length;
	// left rotate array
	// reverse(arr, 0, d-1);
	// reverse(arr, d, arr.length-1);
	// reverse(arr, 0, arr.length-1);

	// right rotate array
	// rotate first first n-k element 
	reverse(arr,0, n-k-1 );
	// rotate last k elements
	reverse(arr, n-k,n-1 );
	//  rotate whole array
	reverse(arr, 0, n-1);
	console.log(arr);

}



// let arr = [1, 2, 3, 4, 5, 6, 7];
let arr = [-1,-100,3,99]       //[3,99,-1,-100]

let d = 2;

console.log(rotateArrByDPlaces(arr, d));
// o/p = [4, 5, 6, 7, 1, 2, 3]
