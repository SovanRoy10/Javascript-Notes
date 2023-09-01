// let score  = "33abc";
// let score  = null;
// let score = true;
let score = undefined;

// console.log(typeof score);
// console.log(typeof (score))

let valueInNumber = Number(score);

// console.log(typeof score);
// console.log(typeof (valueInNumber), valueInNumber)

//"33"  => 33
// "33abc" => NaN
//true => 1
// false => 0

// let isLoggedIn = 1;
// let isLoggedIn = 0;
// let isLoggedIn = "";
let isLoggedIn = "sh";

// console.log(Boolean(isLoggedIn))

let someNumber = 23;
// console.log(String(someNumber))


// ******************************** Operations **********************************************

let value = 3;
let negValue = -value;
// console.log(negValue)

let str1 = "Hello "
let str2 = "Sovan"
let str3 = str1 + str2;
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1"+ 2+ 2)
// console.log(1 + 2+ "2")

// console.log(+ true) // 1
// console.log(+ "") // 0 

let num1 , num2 , num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
console.log(gameCounter++) // 100
console.log(++gameCounter) // 102