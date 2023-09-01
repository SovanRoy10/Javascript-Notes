// arrays

const myArr = [0,1,2,3,4,true,"sovan"]

// const heros = ["spiderman","superman"]
// const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2)

// console.log(myArr[0])
myArr.push(10);  // add at the end
myArr.push(6); // add at the end
myArr.pop();  // remove from the end

myArr.shift(); // remove from begining
myArr.unshift("hehe") // add at begining

console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9));

const newArr = myArr.join();
// console.log(newArr ,  typeof newArr) // type of string

//slice and splice

const arr1 = myArr.slice(1,5);
console.log(arr1);
console.log(myArr)

const arr2 = myArr.splice(1,5); // myArr.splice(starting index, number of elements to delete , elements to add)
console.log(arr2);
console.log(myArr)
