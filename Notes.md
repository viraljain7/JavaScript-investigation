# JavaScript-Notes

hof
reduce map filter
event
async await

# Resource :

- tc39.es
- mdnjs

---

---

# 01 Basics

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

> [!NOTE]
>
> ## Understanding `undefined` and `not defined` in JavaScript

```javascript
let variable;
console.log(variable); // Output: undefined
```

```js
console.log(nonExistentVariable);
// ReferenceError: nonExistentVariable is not defined
```

---

---

## Datatypes in JS (video 5)

## `Data Types`:

- `number`
- `BigInt` (number which exceed 2^52)
- `String`
- `null` (Standalone Value, but datatype is object and value is empty)
- `undefined`
- `Boolean`
- `Symbol`(unique)
- `Object`

> [!NOTE]
>
> ### `Data Types` Results
>
> `BigInt` : BigInt
>
> `null` : object
>
> `Symbol` : Symbol
>
> `Array` : object
>
> `undefined` : undefined

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

---

---

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

> [!NOTE]
>
> ### Type Conversion Summary:
>
> - `ToNumber:`
> - "11abc" converts to NaN
> - "11" converts to 11
> - undefined converts to NaN
> - true converts to 1
> - false converts to 0
> - `ToBoolean:`
> - Any non-empty (" ", " a") string converts to true
> - Empty string ("") converts to false
> - `ToString:`
> - NaN converts to "NaN"
> - undefined converts to "undefined"

---

---

## Operation & Comparison (video 7)

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

## Maths & Number (video 12)

```js
// Number and Math Operations in JavaScript

// Defining Number Variables
const score = 1000234.2665;
const balance = new Number(200); // Object (explicitly defined as type 'number')
console.log(score, balance);
console.log(typeof score, typeof balance); // Output: number, object

// Converting Number to String and Obtaining String Length
console.log(score.toString().length); // Output: 11 (length of string representation)
// Formatting Numbers
console.log(score.toFixed(3)); // Output: "1000234.267" (fixed to 3 decimal places)
console.log(score.toPrecision(3)); // Output: "1.00e+6" (fixed precision with exponential notation)
console.log(score.toPrecision(6)); // Output: "1000230" (rounds off and prioritizes the number of digits)
console.log(score.toLocaleString("en-in")); // Output: "10,00,234.2665" (formatted based on locale)
```

```js
let rupay = 12203494;
console.log(rupay.toLocaleString("en-in")); // output: 1,22,03,494
console.log(rupay.toLocaleString()); // output : 12,203,494
```

```js
// Math Operations
console.log(Math);
console.log(Math.abs(-3)); // Output: 3 (absolute value)
console.log(Math.round(34.43)); // Output: 34 (round to the nearest integer)
console.log(Math.ceil(3.4)); // Output: 4 (round up to the nearest integer)
console.log(Math.floor(3.9)); // Output: 3 (round down to the nearest integer)
console.log(Math.min(12, 4, 6)); // Output: 4 (find minimum value)
console.log(Math.max(2, 4, 6, 7, 0)); // Output: 7 (find maximum value)
console.log(Math.random()); // Output: Random number between 0 and 1 (exclusive)

// Generating Random Integer within a Range
let min = 0;
let max = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Output: Random integer between 0 and 10 (inclusive)
```

## Dates (Video 13)

```js
let date = new Date(); //current date
console.log(date); // 2024-02-20T10:51:41.984Z

console.log(date.toString()); // Mon Feb 19 2024 22:51:41 GMT+0200 (Eastern European Standard Time)

console.log(date.toDateString()); // Mon Feb 19 2024

console.log(date.toLocaleDateString()); // 2/19/2024, 10:51:41 AM

console.log(typeof date); // object
```

```js
// Custom Date
let customDate = new Date(2023, 11, 23); //23/12/2023
let customDate1 = new Date(2023, 11, 23, 23, 59, 59); //23/12/2023 at 23:59:59
let customDate2 = new Date("2023-11-23"); //23/12/2023 yy/mm/dd
let customDate3 = new Date("11-30-2023"); //30/12/2023 mm/dd/yy

console.log(customDate.toLocaleDateString()); // 12/23/2023

console.log(customDate1.toString()); // Sun Dec 24 2023 00:00:00 GMT+0200 (Eastern European Standard Time)

console.log(customDate2.toLocaleDateString()); // 12/23/2023

console.log(customDate3.toLocaleDateString()); // 12/30/2023
```

```js
// TimeStamp
let myTimeStamp = Date.now(); //Exact Date & Time

console.log(myTimeStamp); // 1719265901984

// console.log(myTimeStamp.toLocaleDateString());//Not working

console.log(Math.floor(myTimeStamp / 1000)); // 1719265901
```

```js
//get Day,date,time,month,year
let MyDate = new Date(2023, 11, 23, 23, 59, 59); //23/12/2023 at 23:59:59

console.log(
  `custom date is ${MyDate.getDate()}/${
    MyDate.getMonth() + 1
  }/${MyDate.getFullYear()} @ ${MyDate.getHours()}:${MyDate.getMinutes()}:${MyDate.getSeconds()} Day:${MyDate.getDay()} `
); // custom date is 23/12/2023 @ 23:59:59 Day:6

console.log(MyDate.getHours()); // 23

console.log(MyDate.getMinutes()); // 59

console.log(MyDate.getSeconds()); // 59

console.log(MyDate.getDay()); // 6

console.log(MyDate.getDate()); // 23

console.log(MyDate.getMonth() + 1); // 12

console.log(MyDate.getFullYear()); // 2023
```

## Output with Console and Markdown Notes

- `new Date()`: Returns the current date and time.

  - Output: 2024-02-20T10:51:41.984Z
  - Explanation: This line creates a new `Date` object representing the current date and time.

- `console.log(date);`: Output the current date and time.

  - Output: Mon Feb 19 2024 22:51:41 GMT+0200 (Eastern European Standard Time)
  - Explanation: This line logs the current date and time to the console in string format.

- `console.log(date.toDateString());`: Output the date only.

  - Output: Mon Feb 19 2024
  - Explanation: This line logs only the date portion of the current date to the console.

- `console.log(date.toLocaleDateString());`: Output the date and time only.

  - Output: 2/19/2024, 10:51:41 AM
  - Explanation: This line logs the localized date and time to the console.

- `console.log(typeof date);`: Output the data type of `date`, which is an object.

  - Output: object
  - Explanation: This line logs the data type of the `date` object to the console.

- **Custom Dates**:

  - Custom dates can be created by passing specific parameters to the `Date` constructor.
  - Various formats are supported, including specifying the year, month, day, hour, minute, and second.
  - Examples are provided with different date formats, including the use of `new Date()` with specific date strings.
    - Output: 12/23/2023, Sun Dec 24 2023 00:00:00 GMT+0200 (Eastern European Standard Time), 12/23/2023, 12/30/2023

- **TimeStamp**:

  - `Date.now()`: Returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
  - Math operations are performed to convert milliseconds to seconds.
    - Output: 1719265901984, 1719265901

- **Get Date, Time, and Components**:

  - Methods like `getDate()`, `getMonth()`, `getFullYear()`, `getHours()`, `getMinutes()`, `getSeconds()`, and `
