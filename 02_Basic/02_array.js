const arr = ['Iron Man', 'Captain America', 'Thor', 'Hulk']
const array = ['Thor', 'Black Widow', 'Hawkeye']
const array1 = ['Spider-Man', 'Black Panther', 'Captain Marvel', 'Doctor Strange']
const array2 = ['Bat-Man', 'lion', 'Captain MSD', 'Doctor ']


let k = [arr, array];
console.log(k);

arr.push(array); //push method add data in same Array
console.log(arr);
console.log(arr[4][3]);

let concatArr = array.concat(array1); //concat method add data and return in new Array
console.log(concatArr);

let concatNewArr = [...array1, ...array2]; //spread operator
console.log(concatNewArr);


let givenArr = [1, 2, 3, [4, 6], 7, [8, [9, 0]]];
let anotherArr = givenArr.flat(Infinity); // Flat array
console.log("before flat :", givenArr); // before flat : [1, 2, 3, [4, 6], 7, [8, [9, 0]]]
console.log("After flat :", anotherArr); // After flat : [ 1, 2, 3, 4, 6, 7, 8, 9, 0 ]

//@ Arrays Method learn
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({ name: "hitesh" })); //interesting
let score1 = 1,
  score2 = 2,
  score3 = 4;
console.log(Array.of(score1, score2, score3)); //interesting
