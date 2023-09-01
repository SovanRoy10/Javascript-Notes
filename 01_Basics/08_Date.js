//Dates

let myDate = new Date();
// console.log(myDate)
// console.log(typeof myDate)

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// let myCreatedDate = new Date(2023,8,1);
// let myCreatedDate = new Date(2023,8,1,13,35);
// console.log(myCreatedDate.toLocaleString());

console.log(myDate.getDate());
console.log(Math.floor(Date.now()/1000)); // seconds 

console.log(myDate.getFullYear())

console.log(myDate.toLocaleString('default',{
    weekday : 'long'
}))