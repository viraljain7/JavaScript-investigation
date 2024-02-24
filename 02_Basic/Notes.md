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

```js
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

## Array part-2 (video 15)

```javascript
const arr = ["Iron Man", "Captain America", "Thor", "Hulk"];
const array = ["Thor", "Black Widow", "Hawkeye"];
const array1 = [
  "Spider-Man",
  "Black Panther",
  "Captain Marvel",
  "Doctor Strange",
];
const array2 = ["Bat-Man", "lion", "Captain MSD", "Doctor "];

let k = [arr, array];
console.log(k);
// output : [
//   [ 'Iron Man', 'Captain America', 'Thor', 'Hulk' ],
//   [ 'Thor', 'Black Widow', 'Hawkeye' ]
//          ]

arr.push(array); // Push method adds data to the same array
console.log(arr);
//output : [ 'Iron Man',  'Captain America',  'Thor',  'Hulk',  [ 'Thor', 'Black Widow', 'Hawkeye' ] ]
console.log(arr[4][3]); //output : Hawkeye

let concatArr = array.concat(array1); // Concat method adds data and returns a new array
console.log(concatArr);
//output : [ 'Thor',  'Black Widow',  'Hawkeye',  'Spider-Man',  'Black Panther',  'Captain Marvel',  'Doctor Strange' ]

let concatNewArr = [...array1, ...array2]; // Spread operator
console.log(concatNewArr);
//output : [ 'Spider-Man',  'Black Panther',  'Captain Marvel',  'Doctor Strange',  'Bat-Man',  'lion',  'Captain MSD',  'Doctor ' ]

let givenArr = [1, 2, 3, [4, 6], 7, [8, [9, 0]]];
let anotherArr = givenArr.flat(Infinity); // Flat array
console.log("before flat :", givenArr); // before flat : [1, 2, 3, [4, 6], 7, [8, [9, 0]]]
console.log("After flat :", anotherArr); // After flat : [ 1, 2, 3, 4, 6, 7, 8, 9, 0 ]
```

### Arrays Method learn

```js
// Check if the argument is an array
console.log(Array.isArray("hitesh")); // Output: false

// Convert a string to an array of characters
console.log(Array.from("hitesh")); // Output: [ 'h', 'i', 't', 'e', 's', 'h' ]

// Convert an object to an array (empty array)
console.log(Array.from({ name: "hitesh" })); // Output: []

// Create a new array with the given arguments
let score1 = 1,
  score2 = 2,
  score3 = 4;
console.log(Array.of(score1, score2, score3)); // Output: [ 1, 2, 4 ]
```

## Object part 1 (video16)

```js
// singleton - constructor
// Object.create

// Object Literals
const mysymbol = Symbol("abc"); // Must be declared in order to use in object

const JsUser = {
  [mysymbol]: "myownkey", // Symbol <---important--->
  name: "viral",
  "Full name": "viral jain",
  lastLoggedIn: ["Mon", "Tue"],
  // way 1
  greeting: function () {
    console.log("====================================");
    console.log(`${this.name}`);
    console.log("====================================");
  },
};

// way 2
jsUser.hello = function () {
  console.log("Hello");
};

console.log(JsUser.name); // Output: viral
console.log(JsUser["Full name"]); // Output: viral jain
console.log(JsUser[mysymbol]); // Output: myownkey
console.log(typeof JsUser[mysymbol]); // Output: string
console.log(JsUser.greeting()); // Output: "viral"

JsUser.name = "abc";
Object.freeze(JsUser); // Used to freeze the object

JsUser.name = "abcdee"; // Not able to change object property
console.log(JsUser); // Output: { [Symbol(abc)]: 'myownkey', name: 'viral', 'Full name': 'viral jain', lastLoggedIn: [ 'Mon', 'Tue' ], greeting: [Function: greeting] ,hello:[Function: hello] }
```

## object part-2 (video 17)

```js
//Non-singleton object
const anotherObj = {};

//singleton object
const tinderObj = new Object();

tinderObj.id = 1;
tinderObj.name = "viral Jain";
tinderObj.mail = "veerljain@1234gmail.com";

const user = {
  id: 1,
  name: "viral",
  mail: "veerljain@1234gmail.com",
  fullname: {
    fname: "viral",
    lname: "jain",
    caste: {
      categroy: "minority",
      "community id": "Jain",
    },
  },
};
console.log(user.fullname.caste["community id"]); // Output: Jain

const obj1 = { 1: "a", 2: "b,", 3: "c" };
const obj2 = { 4: "aa", 5: "bb,", 6: "cc" };
const obj3 = { 7: "aaa", 9: "ccc" };

const obj4 = { obj1, obj2, obj3 }; // Problematic
console.log(obj4);
// Output: { obj1: { '1': 'a', '2': 'b,', '3': 'c' }, obj2: { '4': 'aa', '5': 'bb,', '6': 'cc' }, obj3: { '7': 'aaa', '9': 'ccc' } }

const obj5 = Object.assign({}, obj1, obj2, obj3); // Using Object.assign to merge objects
console.log(obj5);
// Output: { '1': 'a', '2': 'b,', '3': 'c', '4': 'aa', '5': 'bb,', '6': 'cc', '7': 'aaa', '9': 'ccc' }

const obj6 = { ...obj1, ...obj2, ...obj3 }; // Using spread operator to merge objects
console.log(obj6); // Output: { '1': 'a', '2': 'b,', '3': 'c', '4': 'aa', '5': 'bb,', '6': 'cc', '7': 'aaa', '9': 'ccc' }

const ArrObj = [
  { id: "a", ob: "b,", 3: "c" },
  { id: "aa", ob: "bb,", 6: "cc" },
  { id: "aaa", ob: "ccc" },
];

console.log(Object.keys(ArrObj[1])); // Output: [ 'id', 'ob', '6' ]
console.log(Object.keys(user.fullname)); // Output: [ 'fname', 'lname', 'caste' ]
console.log(Object.values(user));
// Output: [ 1, 'viral', 'veerljain@1234gmail.com', { fname: 'viral', lname: 'jain', caste: { categroy: 'minority', 'community id': 'Jain' } } ]
console.log(Object.entries(user));
// Output: [ [ 'id', 1 ], [ 'name', 'viral' ], [ 'mail', 'veerljain@1234gmail.com' ], [ 'fullname', { fname: 'viral', lname: 'jain', caste: { categroy: 'minority', 'community id': 'Jain' } } ] ]
console.log(tinderObj.hasOwnProperty("name")); // Output: true
```
