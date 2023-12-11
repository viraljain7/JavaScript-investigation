"use strict"; // treat all JS Code as new version

// Datatypes:
// number
// BigInt //number which exceed from 2^52
// String
// null //Standalone Value but datatype is object and value is empty
// undefined
// Boolean
// Symbol //unique

// Object

let num = 23;
let name = "raghav";
let bool = true;
let erp = null;
let erp2;
let sy = Symbol("12");
let bIgInt = 123456n;

console.table([
  typeof num,
  typeof name,
  typeof bool,
  typeof undefined, //undefined
  typeof null, //object
  sy,
  typeof sy,
  bIgInt,
  typeof bIgInt,
]);
