const user = {
    username : "Sovan",
    price : 999 ,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // in node environment : empty {}
// but in browser this is window object 

// function chai(){
//     let username = "sovan"
//     console.log(this)
//     console.log(this.username) // undefined 
// }
// chai()

// const chai = function(){
//     let username = "sovan"
//     console.log(this)
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "sovan"
//     console.log(this)
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }


const addTwo = (num1,num2)=>  (num1+num2)
// () -> return use kore naa
// {} -> return use korte hbe 

console.log(addTwo(1,3));

const add2 = (num1,num2) => ({username : "sovan"})
console.log(add2(2,3))

const myArry = [2,3,4,5,6]
