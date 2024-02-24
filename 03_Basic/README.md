## function (video 19)

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
// Output: please enter name
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
