## function (video 19 & 20)

```js
function name() {
  console.log("v");
  console.log("i");
  console.log("r");
  console.log("a");
  console.log("l");
}
// name //reference
name(); //exceution
// Output:
// v
// i
// r
// a
// l
```

```js
function add(parameter1, parameter2) {
  return parameter1 + parameter2;
}
let argument1 = 1;
let argument2 = 44;
let addThem = add(argument1, argument2);
console.log(addThem);
// Output: 45
```

```js
function loginUserMsg(username = "default") {
  if (!username) {
    console.log("please enter name");
    return;
  }
  return `${username} is logged in`;
}
let msg = loginUserMsg();
console.log(msg);
// Output: default is logged in
```

```js
// important
function addToCartPrice(...num) {
  return num;
}
let cart = addToCartPrice(100, 200, 300);
console.log(cart);
// Output: [100, 200, 300]
```

```js
const user = {
  username: "viral",
  id: 9,
};
function handleObj(anyObj) {
  return `${anyObj.username} is name ${anyObj.id} has id`;
}
let detail1 = handleObj(user); //Indirect object pass as Argument
console.log(detail1);
// Output: viral is name 9 has id
```

```js
let detail2 = handleObj({
  //direct object pass as Argument
  username: "viraljain",
  id: 89,
});
console.log(detail2);
// Output: viraljain is name 89 has id
```

```js
let arr = [12, 4, 5, 6];
function printArr(getArr) {
  return arr[0];
}
let way1 = printArr(arr); //Indirect Array pass as Argument
console.log(way1);
// Output: 12

let way2 = printArr([1, 24, 4]); //direct Array pass as Argument
console.log(way2);
// Output: 12
```

## scope (video 21 & 22)

```js
var c = 300;
{
  let a = 20;
  const b = 40;
  var c = 4;
}

console.log(c); // Output: 4
// console.log(a); // Scope error
// console.log(b); // Scope error
```

### closure

```js
// Closure
function one() {
  const username = "viral";

  function two() {
    const website = "youtube";
    console.log(website + username);
  }
  two();
  // console.log(website); // Scope error
}
one();
// console.log(username); // Scope error
```

```js
function outerFunction() {
  // Variable defined in the outer function's scope
  let outerVariable = "I am from the outer function";

  // Inner function defined within the outer function
  function innerFunction() {
    // Inner function has access to the outer variable
    console.log(outerVariable);
  }

  // Returning the inner function from the outer function
  return innerFunction;
}

// Call the outer function, which returns the inner function
const innerFunc = outerFunction();

// Execute the inner function, even though the outer function has finished executing
innerFunc(); // Output: I am from the outer function
```

### hositing

```js
console.log(sum1(4)); // Working due to hoisting
function sum1(num) {
  return num;
}
console.log(sum1(4)); // Output: 4

// console.log(sum2(40)); // Not working
const sum2 = function (num) {
  return num;
};
console.log(sum2(40)); // Output: 40
```

```js
// Example 1: Function Declaration
console.log(add(2, 3)); // Output: 5 (Works fine due to hoisting)

function add(a, b) {
  return a + b;
}

// Example 2: Variable Declaration
console.log(x); // Output: undefined (Variable declaration is hoisted, but not initialized)
var x = 10;
console.log(x); // Output: 10 (Variable assignment is not hoisted)

// Example 3: Function Expression
// console.log(subtract(5, 3)); // Error: subtract is not defined (Function expression is not hoisted)

var subtract = function (a, b) {
  return a - b;
};
console.log(subtract(5, 3)); // Output: 2 (Works fine after function expression assignment)
```

### arrow and this (video 23)

```js
const user = {
  id: 1,
  name: "viral",
  mail: "veerljain@1234gmail.com",
  welcomeMsg: function () {
    console.log(this);
    console.log(`${this.name} welcomed`);
  },
};
user.welcomeMsg();
// Output:
// { id: 1, name: 'viral', mail: 'veerljain@1234gmail.com', welcomeMsg: [Function: welcomeMsg] }
// viral welcomed

user.name = "kadam"; //context change
user.welcomeMsg();
// Output:
// { id: 1, name: 'kadam', mail: 'veerljain@1234gmail.com', welcomeMsg: [Function: welcomeMsg] }
// kadam welcomed
```

````js
```js
console.log(this); // Refer to empty object in Node.js but 'window' in browser (global object)
````

```js
function chai() {
  console.log(this); // undefined
  let username = "kmd";
  //   console.log(this.username); // Not accessible because 'this' does not work in regular functions
}
chai();
```

```js
const arrowFun = () => {
  console.log(this); // undefined
  console.log("I am an Arrow Function");
};
arrowFun();
```

```js
const sumTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(sumTwo(4, 9)); // Output: 13
```

```js
const sumtwoo = (num1, num2) => num1 + num2;
console.log(sumtwoo(1, 4)); // Output: 5
```

```js
const sumtwooo = (num1, num2) => num1 + num2; // Parentheses optional for single expression
console.log(sumtwooo(14, 4)); // Output: 18
```

```js
const sumoo = (num1, num2) => ({ name: "hitrsh" }); // Parentheses required when returning an object
console.log(sumoo(14, 4)); // Output: { name: 'hitrsh' }
```

### IIFE (video 24)

```js
// Immediately Invoked Function Expression
(function chai(params) {
  //named IIFE because function have named as chai
  console.log("To prevent pollution of the global scope");
})(); // Semicolon(;) is important

(() => {
  console.log("hello");
})();

((name) => {
  console.log(`hello ${name}`);
})("nam"); // This is known as a named IIFE
```

### execute code + call stack (video 25) watch again
