// 3 states of promises :
// pending
// fulfilled
// rejected


// const promise1 = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography , network
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("Promise consumed")
// })


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task 2")
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("Asynce 2 resolved ")
// })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         resolve({ username: "sovan", email: "sovan00@gmail.com" })

//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user)
// })

//chaining

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error)
//             resolve({ username: "sovan", password: "12345" })
//         else
//             reject('Error : something went wrong')

//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user)
//     return user.username
// }).
// then((username)=>{
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Finally promise is either resolved or rejected")
// })


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true
//         if (!error)
//             resolve({ username: "javascript", password: "12345" })
//         else
//             reject('Error : js went wrong')

//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()



// async function getAllUsers() {
//     try {
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data =await  response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log("E ",error)
//     }
// }

// getAllUsers();




fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })

