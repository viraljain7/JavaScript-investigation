# JavaScript-Notes

hof
reduce map filter
event
async await

## 01 Basics

## Understanding `var` ,`let` and `const` in JavaScript

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
