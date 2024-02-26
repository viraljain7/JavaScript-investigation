let arr = [1, 2, 3, "viral", true]
for (const i of arr) {
    console.log(i);
}

let str = "viral"
for (const i of str) {
    console.log(i);
}

const map = new Map()// Map contains only unique value
map.set("key", "value")
map.set("IN", "India")
map.set("ENG", "England")
map.set("IN", "India")//will not add  bcz  Map contains only unique value
map.set("IN", "Ind")//overwrite
map.set("US", "United State")
console.log(map);

for (const iterator of map) {
    console.log(iterator);
}

for (const [key, value] of map) {
    console.log(key, " :- ", value);
}


let myobj = {
    name: "viral",
    rollno: 90
}
// myobj is not iterable
// for (const [key, value] of myobj) {
//     console.log(key, " :- ", value);
// }
