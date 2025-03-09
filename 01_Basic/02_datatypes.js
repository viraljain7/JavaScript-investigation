"use strict"; // treat all JS Code as new version

//@ Datatypes:
// number
// BigInt //number which exceed from 2^52
// String
// null //Standalone Value but datatype is object and value is empty
// undefined
// Boolean
// Symbol //unique

// Object

let num = 23;
let username = "Viral";
let bool = true;
let erp = null;
let erp2;
let sy = Symbol("12");
let bIgInt = 123456n;

console.table([
  typeof num,
  typeof username,
  typeof bool,
  typeof undefined, //undefined
  typeof null, //object
  sy,
  typeof sy,
  bIgInt,
  typeof bIgInt,
]);


//@g ### 1. Primitive Data Types (Immutable)

//@g | **Name**      | **Type**      | **Example**                     |
//@g |---------------|---------------|---------------------------------|
//@g | Number        | `"number"`    | `let age = 25;`                 |
//@g | String        | `"string"`    | `let name = "Alice";`           |
//@g | Boolean       | `"boolean"`   | `let isStudent = true;`         |
//@g | Undefined     | `"undefined"` | `let x;`                        |
//@g | Null          | `"object"`    | `let user = null;`              |
//@g | Symbol        | `"symbol"`    | `let id = Symbol("id");`        |
//@g | BigInt        | `"bigint"`    | `let bigNum = 12345678901234567890n;` |

//@g ### 2. Non-Primitive Data Types (Mutable)

//@g | **Name**      | **Type**      | **Example**                     |
//@g |---------------|---------------|---------------------------------|
//@g | Object        | `"object"`    | `let person = { name: "Alice" };` |
//@g | Array         | `"object"`    | `let fruits = ["apple", "banana"];` |
//@g | Function      | `"function"`  | `function greet() { console.log("Hello!"); }` |