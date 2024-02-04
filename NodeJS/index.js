const fs = require("fs");
setTimeout(() => console.log("Hello From timer 1"),0);
setImmediate(() => console.log("Hello from Immidiate fun 1"))
fs.readFile('sample.txt', "utf-8", () => {
    console.log("IO Polling Finish")
})  
console.log("Helllo from top level")



//  example 2
process.env.UV_THREADPOOL_SIZE = 10

const crypto = require("crypto")

const fs = require("fs");

const start = Date.now();

setTimeout(() => console.log("Hello From timer 1"),0);
setImmediate(() => console.log("Hello from Immidiate fun 1"))
fs.readFile('sample.txt', "utf-8", () => {
    console.log("IO Polling Finish")
    setTimeout(() =>console.log("Hello form timer 2"),0)
    setTimeout(() => console.log("Hello fro timer 3"), 5*1000)
    setImmediate(() => console.log("Hello from Immidiate Fn 2"))

    crypto.pbkdf2('Password1','salt1',100000, 1024, 'sha512', () => {
      console.log( `${Date.now() - start} ms`,'password 1 done')
    })
    crypto.pbkdf2('Password2','salt1',100000, 1024, 'sha512', () => {
      console.log(`${Date.now() - start} ms`,'password 2 done')
    })
    crypto.pbkdf2('Password3','salt1',100000, 1024, 'sha512', () => {
      console.log(`${Date.now() - start}ms` ,'password 3 done')
    })
    crypto.pbkdf2('Password4','salt1',100000, 1024, 'sha512', () => {
      console.log(`${Date.now() - start}`,'password 4 done')
    })
    crypto.pbkdf2('Password5','salt1',100000, 1024, 'sha512', () => {
      console.log(`${Date.now() - start}`,'password 5 done')
    })
    crypto.pbkdf2('Password6','salt1',100000, 1024, 'sha512', () => {
      console.log(`${Date.now() - start}`,'password 6 done')
    })
})  
console.log("Helllo from top level")
