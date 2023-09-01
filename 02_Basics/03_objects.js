// singleton  : constructor theke banale singleton 
// literal theke banale is not singleton

// Object.create

//object litrals

const mySym = Symbol("key1");

const user = {
    name : "Sovan",
    "fullName" : "Sovan Roy",
    age : 20,
    location : "Kolkata",
    email : "sovan00@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    [mySym] : "key1" // symbol as a key 
}

console.log(user)

// accessing values of key of a object

console.log(user.email)
console.log(user["email"])
console.log(user["fullName"])
console.log(typeof user[mySym])

// override the values of keys
user.age = 21;

// if you want to lock the values of key so that no one can change it , for that you can use freeze

// Object.freeze(user)
// user.age = 22;
// console.log(user.age) // 21

user.greeting  = function(){
    return "Hello User"
}
user.greetingTwo  = function(){
    return `Hello ${this.name}`
}

console.log(user.greeting())
console.log(user.greetingTwo())