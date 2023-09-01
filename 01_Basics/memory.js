// stack(primitive)  , Heap (Non-primitive)

let Name = "Sovan Roy";
let anotherName = "Sovan";

anotherName = "s";
console.log(Name)

const myObj = {
    name : "sovan"
}

const anotherObj = myObj;
anotherObj.name = "suraj"

console.log(myObj.name)