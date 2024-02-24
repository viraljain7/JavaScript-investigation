// Arrays follow shallow copies {properties share same refrence point}
// deep copies {properties not share same refrence point}

let arr = [0, 1, true, "ram"];
let arry = new Array(1, 2, 4, true);

//// Arrays Method
arry.push(40);
arry.push(40);
arry.pop();
arry.unshift(23); //not  recommoded expensive operation
arry.shift(); //not  recommoded  expensive operation
console.log(arry);
console.log(arry.includes(2));
console.log(arry.indexOf(true));

// let arrToStr = arry.join(); //join two Array And convert to String
// console.log(arrToStr);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
let myArray = [0, 1, 2, 3, 4, 5, 6, 6];
// splice, slice
console.log("OG: ", myArray);

// Using slice - it doesn't modify the original array
let sliceArr = myArray.slice(1, 4);
console.log("Slice: ", sliceArr);
console.log("Arr: ", myArray);

// Using splice - it modifies the original array
let spliceArr = myArray.splice(1, 4);
console.log("Splice: ", spliceArr);
console.log("Arr: ", myArray);

// 03:25:00 to 03:30:00 must watch
