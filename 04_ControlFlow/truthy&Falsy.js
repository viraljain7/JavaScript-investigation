// truth value:- "0", "false", " ", [],{}, function(){}
// Falsy value:- false ,0 ,BigInt 0n , "" , null ,undefined, NaN

const emptyObj = {}; //check Object is empty or not
if (Object.keys(emptyObj).length === 0) console.log("empty Object");

const emptyArr = []; //check Array is empty or not
if (emptyArr.length === 0) console.log("empty Array");

// +++++++++++Important+++++++++++++
// false == 0; //true
// false == ""; //true
// "" == 0; //true

// Nullish Coalescing Operator(??) : Null Undefined

let val = 5 ?? 10;
let val2 = null ?? 20;
let val3 = null ?? undefined;
let val4 = undefined ?? null;
let val5 = undefined ?? null ?? 20 ?? 30;
console.log(val, val2, val3, val4, val5);

// Ternary Operator
// Syntax:condition ? true : false;
