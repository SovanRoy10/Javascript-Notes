const accountId = 14453;
let accountEmail = "roysovan00@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";

// accountId = 2; // not allowed

// console.table([accountEmail,accountId,accountPassword,accountCity])

/* 
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

let accountState;
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])