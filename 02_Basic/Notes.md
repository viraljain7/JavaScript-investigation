# 02 Basics

## Arrays part-1 (video 14)

```js
// Arrays follow shallow copies (properties share same reference point)
// deep copies (properties not share same reference point)

let arr = [0, 1, true, "ram"];
let myArr = new Array(1, 2, 4, true);

//// Arrays Method
myArr.push(40); // adds 40 to the end of the array
myArr.push(40); // adds another 40 to the end of the array
myArr.pop(); // removes the last element (40) from the array
myArr.unshift(23); // adds 23 to the beginning of the array //not  recommoded expensive operation
myArr.shift(); // removes the first element (23) from the array //not  recommoded  expensive operation
console.log(myArr); // prints [1, 2, 4, true, 40]
console.log(myArr.includes(2)); // prints true, as 2 is an element of the array
console.log(myArr.indexOf(true)); // prints 3, as true is at index 3 of the array

let arrToStr = myArr.join(); //join two Array And convert to String
console.log(arrToStr); // [1,2,4,"true",40]
```

````js
// Using slice and splice methods
let myArray = [0, 1, 2, 3, 4, 5, 6, 6];

// splice, slice
console.log("OG: ", myArray); // prints "OG: " [0, 1, 2, 3, 4, 5, 6, 6]

// Using slice - it doesn't modify the original array
let sliceArr = myArray.slice(1, 4); // returns a new array with elements from index 1 to 3 (excluding 4) of the original array
console.log("Slice: ", sliceArr); // prints "Slice: " [1, 2, 3]
console.log("Arr: ", myArray); // prints "Arr: " [0, 1, 2, 3, 4, 5, 6, 6]  // Original array remains unchanged

// Using splice - it modifies the original array
let spliceArr = myArray.splice(1, 4); // removes 4 elements from index 1 of the original array and returns them as a new array
console.log("Splice: ", spliceArr); // prints "Splice: " [1, 2, 3, 4]
console.log("Arr: ", myArray); // prints "Arr: " [0, 5, 6, 6] //Original array modified

// 03:25:00 to 03:30:00 must watch
```

### In the provided code, slice and splice methods are demonstrated:

- `slice(startIndex, endIndex):` Returns a shallow copy of a portion of an array into a new array object. The original array remains unchanged.
- ` splice(startIndex, deleteCount):` Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.
````
