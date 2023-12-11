const arr = [1, 2, 3, 4];
const array = [3, 5, 6, 7];
const array1 = [30, 50, 60, 70];
const array2 = [30, 50, 60, 70];

let k = [arr, array];
console.log(k);

arr.push(array); //push method add data in same Array
console.log(arr);
console.log(arr[4][3]);

let concatArr = array.concat(array1); //concat method add data and return in new Array
console.log(concatArr);

let concatNewArr = [...array1, ...array2]; //spread operator
console.log(concatNewArr);
console.log("before flat :", arr);
let anotherArr = arr.flat(Infinity); //flat Array
console.log("After flat :", anotherArr);

//@ Arrays Method learn
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({ name: "hitesh" })); //interesting
let score1 = 1,
  score2 = 2,
  score3 = 4;
console.log(Array.of(score1, score2, score3)); //interesting
