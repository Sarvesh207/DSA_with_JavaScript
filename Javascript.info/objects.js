const person = {
  name: "sarvesh",
  lname: "gaynar",
};

// 1)  Number of ways to create object.
//  Object literal   Note: Only concern here is we can not make blue print means we not to write repetitive code

// Constructor function  Base Blue print so we can create number of objects by using this blue print , for naming this  function we use PascalCase

// function Person(fname, lname, contact) {
//   (this.fname = fname), (this.lname = lname), (this.contact = contact);
//   this.getName = function () {
//     console.log(this.fname, this.lname);
//   };
// }


// const Person1 = new Person("Sarvesh","Gaynar", "45678852")
// const Person2 = new Person("Devesh","Gaynar", "789654")
// const Person3 = new Person("Chetan","Gaynar", "1000122")
// console.log(Person1, Person2, Person3);


//  all this constructor functions we used to before ES6 to crate blue print

//  after ES6 in we use class to make blue print of thw function

class Person {
    constructor(fname, lname, contact){
        this.fname=fname,
        this.lname = lname,
        this.contact = contact
    }
    getName(){
        console.log(this.fname, this.lname);
    }
    getContact(){
        console.log(this.contact)
    }
}


const Person1 = new Person("Sarvesh","Gaynar", "45678852")
const Person2 = new Person("Devesh","Gaynar", "789654")
const Person3 = new Person("Chetan","Gaynar", "1000122")
console.log(Person1, Person2, Person3);

console.log(Person1.getContact())
console.log(Person1.getName())


