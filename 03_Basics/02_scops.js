var c = 300; // global scope
let a = 300;
if(true){  // block scope
    let a = 10;
    const b = 20;
    var c= 30;
}

// console.log(a)
// console.log(b)
// console.log(c)

//+++++++++++++++++++++++++++++++++ scope level and mini hoisting ++++++++++++++++++++++++++++++++++

function one(){
    const username = "sovan";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website)
    // two()
}
one()



if(true){
    const username = "sovan"
    if(username === "sovan")
    {
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


// +++++++++++++++++++++++++ interesting(mini hoisting) +++++++++++++++++++++++++++++++++++


console.log(addOne(5));

function addOne (num){  // function
    return num+1;
}

// addOne(5);


addTwo(5);
const addTwo = function(num){ //expression 
    return num+2;
}

// addTwo(5);