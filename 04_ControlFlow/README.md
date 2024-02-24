```js
// Truthy values: "0", "false", " ", [], {}, function(){}
// Falsy values: false, 0, BigInt 0n, "", null, undefined, NaN

const emptyObj = {}; // Check if object is empty
if (Object.keys(emptyObj).length === 0) console.log("Empty object");

const emptyArr = []; // Check if array is empty
if (emptyArr.length === 0) console.log("Empty array");

// Important: Comparison between falsy values
// false == 0; // true
// false == ""; // true
// "" == 0; // true

// Nullish Coalescing Operator (??) : Null Undefined
let val = 5 ?? 10;
let val2 = null ?? 20;
let val3 = null ?? undefined;
let val4 = undefined ?? null;
let val5 = undefined ?? null ?? 20 ?? 30;
console.log(val, val2, val3, val4, val5);

// Ternary Operator
// Syntax: condition ? true : false;
```
