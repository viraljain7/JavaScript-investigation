const score = 1000234.2665;
const balance = new Number(200); //object  <---------explicitly define type =number-------->
console.log(score, balance);
console.log(typeof score, typeof balance);

console.log(score.toString().length);
console.log(score.toFixed(3)); //fixed number of dicimal digit
console.log(score.toPrecision(3)); //fixed number of dicimal digit
console.log(score.toPrecision(6)); //round off number then prioritize to number of digit

let rupay = 12203494;
console.log(rupay.toLocaleString("en-in"));
console.log(rupay.toLocaleString());

//  ++++++++++++++++   Maths   ++++++++++++
console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(34.43));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.9));
console.log(Math.min(12, 4, 6));
console.log(Math.max(2, 4, 6, 7, 0));
console.log(Math.random()); // range 0 to 0.99

//formula for min to max:-
let min = 0;
let max = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
