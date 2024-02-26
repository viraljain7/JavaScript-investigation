## for of( Video 29 )

```js
let arr = [1, 2, 3, "viral", true];
for (const i of arr) {
  console.log(i);
}

let str = "viral";
for (const i of str) {
  console.log(i);
}

const map = new Map(); // Map contains only unique value
map.set("key", "value");
map.set("IN", "India");
map.set("ENG", "England");
map.set("IN", "India"); //will not add  bcz  Map contains only unique value
map.set("IN", "Ind"); //overwrite
map.set("US", "United State");
console.log(map);

for (const iterator of map) {
  console.log(iterator);
}

for (const [key, value] of map) {
  console.log(key, " :- ", value);
}

let myobj = {
  name: "viral",
  rollno: 90,
};
// myobj is not iterable
// for (const [key, value] of myobj) {
//     console.log(key, " :- ", value);
// }
```

## forin

```js
let myobj = {
  key: "value",
  IN: "India",
  ENG: "England",
};

for (const key in myobj) {
  console.log(key, " :- ", myobj[key]);
}

let arr = [1, 2, 3, "viral", true];
for (const key in arr) {
  console.log(key, " :- ", arr[key]);
}

// iteration on map is not possible
```

## Higher Order Function

```js
// forEach   //higher Order Function

let arr = [1, 2, 3, "viral", true];
let arr2 = [1, 2, 3, "viralj", true];
arr2.forEach((value, key, givenArr) => {
  console.log(key, " :- ", value, givenArr);
});

const obj1 = [
  {
    lang: "a",
    id: "b,",
    code: "c",
  },
  {
    lang: "aa",
    id: "bb,",
    code: "cc",
  },
  {
    lang: "aaa",
    code: "ccc",
  },
];
obj1.forEach((value, key) => {
  console.log(key, " :-", value.id);
});
```

## video 30

### filter

```js
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);
```

### map

```js
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
```

### reduce

```js
const arr = [1, 2, 3];

let intialvalue = 0;
let reduce = arr.reduce((accumulator, currValue) => {
  console.log(` Accumaltor : ${accumulator} and currval: ${currValue}`);
  return accumulator + currValue;
}, intialvalue);
console.log(reduce);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
```
