let users = [
  { id: 1, name: "John", age: 18 },
  { id: 2, name: "Pete", age: 18 },
  { id: 3, name: "Mary", age: 18 },
];

//

let arr = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits.at(-4));

//  Array add/ delete methods from front and back

//  Pop , Push, shift, unshift

let numbers = [1, 2, 3, 4];

// numbers.push(5);  // add at the end of array
//  ans -> [1, 2, 3,  4, 5]

// [1, 2, 3, 4]
// numbers.pop(4);  // remove the last last element from array
//  ans -> [1, 2, 3]

// [1, 2, 3, 4]
// numbers.shift()

// ans   remove first element from the array  and lf we log numbers.shift()    it return first removed elemen

//  Note : In javascript array performs both operation [LIFO] Last in first out and [FIFO] first in first out  queues its call deque

// methods push and unshift can add multiple elements from front and back

numbers.unshift(0);
console.log(numbers);
// console.log(numbers.shift())

//  Methods push/ pop are fast as compare to shift /unshift  because in from the end its to add . remove element but from the front side   first if shift then remove  then move all elements to left and renumber them then update length similar to unshift thats why its very slow to working with shift / unshift;

//  Loops on Arrays

/**
 *  1) regular for loop
 *  2) for..of loop
 *  3) for..in can also work its bad idea its optimize for generic objects not for array
 *
 */

//  Exercise

//   What is this code going to show?

let fruits2 = ["apple", "banana", "mango"];
console.log("Before", fruits2);

let shoppingCart = fruits2;

shoppingCart.push("Berry");

console.log("after", fruits2);

//    array are objects and shopping cart its also points to same referenced so it will also change original array;

/**
 * Let’s try 5 array operations.

    Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggae to the array.

 */
const arr3 = ["Jazz", "Blues"];

arr3.push("Rock-In-Roll");

arr3[Math.floor(arr3.length - 1 / 2)] = "Classics";

console.log(arr3.shift());

arr3.unshift("Rap", "Reggae");

console.log(arr3);
