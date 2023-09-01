// Immediately Invoked Fucntion Expression (IIFE)

(function chai() // named IIFE
{
    console.log("DB CONNECTED")
})(); // use semicolon to end this

// first paranthesis for definition of function and 2nd paranthesis is for execution

// we use IIFE to prevent the pollution by the global variables

( (name)=> { //unnamed IIFE
    console.log(`DB CONNECTED Two ${name}`)
})('sovan');

