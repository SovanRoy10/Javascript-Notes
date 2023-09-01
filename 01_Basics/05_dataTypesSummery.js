//premitive and non premitive data types

//Primitve 

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id ===  anotherId)

const bigNumber = 288923773733839323n; // bigint

//Reference (Non premitive)

// Array , Objects , Functions

const heros = ["spiderman" , "ironman","batman","superman"]

const myObj = {
    name : "sovan",
    age : 21
}

function addNum (a ,b ){
    return a+b;
}


console.log(typeof bigNumber)


//Non premitive's data type is obejct

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.