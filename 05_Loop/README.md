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
