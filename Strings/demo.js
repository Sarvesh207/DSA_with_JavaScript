let arrr = ["abc", "hello", "c", "d", "abc", "d"];
let obj ={};
for(const elem of arrr){
    if(!obj[elem]){
        obj[elem] = true;
    }
}

for (const key in obj) {
    console.log(key)
}