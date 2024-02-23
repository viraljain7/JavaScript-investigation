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
const accId = 2345; // accId is constant
let accEmail = "abc@gmail.com";
var accIndex = 3; // Prefer not to use var because of issues with block scope and function scope

accCity = "sabla"; // Not recommended, creates a global variable

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

## `Data Types`:

- `number`
- `BigInt` (number which exceed 2^52)
- `String`
- `null` (Standalone Value, but datatype is object and value is empty)
- `undefined`
- `Boolean`
- `Symbol `(unique)
- `Object`

```js
"use strict"; // treat all JS Code as new version
```

```js
let sy = Symbol("12");
let bIgInt = 123456n;
```

```js
console.table([
  typeof undefined, //undefined
  typeof null, //object
  sy, //symbol(12)
  typeof sy, //symbol
  bIgInt, //123456n
  typeof bIgInt, //bigint
]);
```

## Conversion (vidoe 6)

## Converting Values in JavaScript

```js
// Converting Strings to Numbers
let rollNo = "11abc";
rollNo = Number(rollNo); // "11abc" converted to NaN
```

```js
let No = "11";
No = Number(No); // "11" converted to 11
```

```js
console.table([rollNo, No]); // Output: [ NaN, 11 ]
```

```js
// Converting Values to Strings
let a = String(NaN); // NaN converted to "NaN"
let b = String(undefined); // undefined converted to "undefined"

console.log(a, b); // Output: "NaN undefined"
```

```js
// Unary Plus Operator (+) for Implicit Type Conversion
console.log(+true); // Output: 1 (true converted to 1)
console.log(+""); // Output: 0 (empty string converted to 0)
console.log(+"v"); // Output: NaN (non-numeric string converted to NaN)
console.log(+[]); // Output: 0 (empty array converted to 0)
console.log(+{}); // Output: NaN (empty object converted to NaN)
```

### Type Conversion Summary:

- `ToNumber:`
  - "11abc" converts to NaN
  - "11" converts to 11
  - undefined converts to NaN
  - true converts to 1
  - false converts to 0
- `ToBoolean:`
  - Any non-empty string converts to true
  - Empty string converts to false
- `ToString:`
  - NaN converts to "NaN"
  - undefined converts to "undefined"

## Operation & Comparision (video 7)

## JavaScript Type Coercion and Comparison

```js
// JavaScript Type Coercion and Comparison

// Type Coercion in JavaScript
console.log("2" + 1); // Output: "21" (string concatenation)
console.log(2 + "1" + 2); // Output: "212" (string concatenation)
console.log(2 + 4 + "1"); // Output: "61" (string concatenation)
```

```js
console.log("2" > 1); // Output: true (string "2" converted to number 2 for comparison)
console.log("02" > 1); // Output: true (string "02" converted to number 2 for comparison)
console.log("2" === 2); // Output: false (strict equality check, different types)
```

```js
console.log(null < 0); // Output: false (null coerced to number 0 for comparison)
console.log(null == 0); // Output: false (null is not equal to 0, different types)
console.log(null <= 0); // Output: true (null coerced to number 0 for comparison)
console.log(null >= 0); // Output: true (null coerced to number 0 for comparison)
```

```js
console.log(undefined <= 0); // Output: false (undefined cannot be compared with numbers)
console.log(undefined >= 0); // Output: false (undefined cannot be compared with numbers)
console.log(undefined == 0); // Output: false (undefined cannot be compared with numbers)
```

### Notes: <-------IMP------->

- JavaScript performs type coercion when operands of different types are used together.
- String concatenation occurs when the "+" operator is used with strings.
- Comparison operators convert operands to numbers or strings depending on the context.
- `Strict equality (===)` checks both value and type, while loose `equality (==)` only checks value.
- Null is treated as 0 in numeric comparisons, but undefined does not have a well-defined behavior in comparisons with numbers.
- Comparing undefined with any number always results in false.
- Be cautious with loose `equality (==)` as it can lead to unexpected behavior due to type coercion.

## Datatypes Summary (video 9)

### Datatypes in JavaScript

`Primitive` Datatypes `(stored in stack memory)`:

- string
- number
- boolean
- BigInt
- undefined
- null
- Symbol

`Reference (Non-primitive)` Datatypes `(stored in heap memory)`:

- Array(Object) <-------IMP------->
- Object
- Function (object function)

```js
let name = "viral"; // string
let num = 34; // number
let logged = false; // boolean
let bignum = 1234567890n; // BigInt
let don; // undefined
let done = null; // null
let sy = Symbol("se"); // Symbol
```

```js
let arr = [1, 2, "ram", true]; // Object
let myobj = {
  name: "viral",
  salary: 10000,
}; // Object
```

```js
let myfun = function () {
  return "hello"; // object function
};
```

```js
// Displaying Types
console.table([
  typeof name, // "string"
  typeof num, // "number"
  typeof logged, // "boolean"
  typeof bignum, // "bigint"
  typeof don, // "undefined"
  typeof done, // "object"
  typeof sy, // "symbol"
  typeof arr, // "object" <-------IMP------->
  typeof myobj, // "object"
  typeof myfun, // "object function" <-------IMP------->
]);
```

## String in JS( video 11)

```js
// JavaScript String Operations

// Defining Variables
let name = "viral";
let oldName = new String("kadamjain"); // Using String object
let RollNo = 234;
```

```js
// String Interpolation
console.log(`My name is ${name} [${oldName}] and roll number is ${RollNo}`);
```

```js
// String Length
console.log(oldName.length); // Output: 9
```

```js
// Converting to Uppercase
console.log(oldName.toUpperCase()); // Output: KADAMJAIN
```

```js
// Accessing Characters
console.log(oldName.charAt(3)); // Output: m
```

```js
// Finding Substrings
console.log(oldName.indexOf("d")); // Output: 5
```

```js
// Substring Extraction
const str = oldName.substring(2, 4); // "da"
console.log(str);
```

```js
// Using Slice Method
const mystr = oldName.slice(-5, -3); // "ja"
console.log(mystr);
```

```js
// Trimming Whitespaces
const mytrim = "   viral20%dk    ";
console.log(mytrim.trim()); // Output: "viral20%dk"
console.log(mytrim.trimStart()); // Output: "viral20%dk    "
console.log(mytrim.trimEnd()); // Output: "   viral20%dk"
```

```js
// Replacing Substrings
console.log(mytrim.replace("20%", "_")); // Output: "   viral_dk    "
```

```js
// Checking for Substrings
console.log(mytrim.includes("20%")); // Output: true
```

```js
// Splitting Strings
console.log(mytrim.split("20%")); // Output: ["   viral", "dk    "]
```

## JavaScript String Extraction Methods

### 1. slice(startIndex, endIndex)

- Extracts a portion of a string and returns it as a new string.
- **Key Points:**
  - `startIndex`: The index at which to begin extraction (inclusive).
  - `endIndex`: The index before which to end extraction (exclusive).
  - If `endIndex` is omitted, extraction continues to the end of the string.
  - Negative indexes count from the end of the string.
- **Examples:**
  ```javascript
  const str = "Hello World";
  const sliced1 = str.slice(0, 5); // "Hello"
  const sliced2 = str.slice(-5); // "World"
  const sliced3 = str.slice(6); // "World"
  ```

### 2. substring(startIndex, endIndex)

- Extracts a portion of a string and returns it as a new string.
- **Key Points:**
  - `startIndex:` The index at which to begin extraction (inclusive).
  - `endIndex`: The index before which to end extraction (exclusive).
  - If `endIndex` is omitted or less than startIndex, arguments are swapped.
  - Negative indexes are treated as 0.
    Examples:

```javascript
const str = "Hello World";
const sub1 = str.substring(6, 11); // "World"
const sub2 = str.substring(11, 6); // "World" (Arguments swapped)
const sub3 = str.substring(-5); // "Hello World" (Treated as 0)
```

### 3. substr(startIndex, length)

Extracts a specified number of characters from a string.

**Key Points:**

- `startIndex`: The index at which to begin extraction (inclusive).
- `length`: The number of characters to extract.
- If `length` is omitted, extraction continues to the end of the string.
- Negative `startIndex` counts from the end of the string.

### Examples:

```javascript
const str = "Hello World";
const sub1 = str.substr(6, 5); // "World"
const sub2 = str.substr(-5); // "World" (Negative startIndex)
const sub3 = str.substr(6); // "World" (No length specified)
```

### Summary:

- slice() and substring() are similar but differ in how they handle negative indexes and out-of-order arguments.
- substr() uses a start index and a length rather than start and end indexes.
- Choose the appropriate method based on your specific requirements for extracting substrings in JavaScript.
