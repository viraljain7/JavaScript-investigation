# JavaScript-Notes

hof
reduce map filter
event
async await

## Resource :

- tc39.es
- mdnjs

## 01 Basics

## Understanding `var` ,`let` and `const` in JavaScript (video 4)

```js
const accId = 2345;
let accEmail = "abc@gmail.com";
var accIndex = 3; //Prefer to not use var because of issue in block  scope and functional scope

accCity = "sabla"; //Not recommoned

console.table([accId, accEmail, accIndex, accCity]);

// accId=23 // Not possible to change due to const
accEmail = "qwe@gamil.com";
accIndex = 34;
accCity = "app";

console.table([accId, accEmail, accIndex, accCity]);
```

## Understanding `undefined` and `not defined` in JavaScript

```javascript
let variable;
console.log(variable); // Output: undefined
```

```js
console.log(nonExistentVariable);
// ReferenceError: nonExistentVariable is not defined
```

## Datatypes in JS (video 5)

```js
"use strict"; // treat all JS Code as new version

// Data Types:
// - number
// - BigInt (number which exceed 2^52)
// - String
// - null (Standalone Value, but datatype is object  and value is empty)
// - undefined
// - Boolean
// - Symbol (unique)
// Object

let sy = Symbol("12");
let bIgInt = 123456n;

console.table([
  typeof undefined, //undefined
  typeof null, //object
  sy, //symbol(12)
  typeof sy, //symbol
  bIgInt, //123456n
  typeof bIgInt, //bigint
]);
```
