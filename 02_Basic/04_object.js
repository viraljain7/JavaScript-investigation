//Non-singleton object
const anotherObj = {};

//singleton object
const tinderObj = new Object();

tinderObj.id = 1;
tinderObj.name = "viral Jain";
tinderObj.mail = "veerljain@1234gmail.com";
// console.log(tinderObj);

const user = {
  id: 1,
  name: "viral",
  mail: "veerljain@1234gmail.com",
  fullname: {
    fname: "viral",
    lname: "jain",
    caste: {
      categroy: "minority",
      "community id": "Jain",
    },
  },
};
console.log(user.fullname.caste["community id"]);

const obj1 = { 1: "a", 2: "b,", 3: "c" };
const obj2 = { 4: "aa", 5: "bb,", 6: "cc" };
const obj3 = { 7: "aaa", 9: "ccc" };

const obj4 = { obj1, obj2, obj3 }; //problematic

// Syntax: Object.assign(target,source1,source2,....)
const obj5 = Object.assign({}, obj1, obj2, obj3); //assign

const obj6 = { ...obj1, ...obj2, ...obj3 };// spread
console.log(obj6);

// Arrays Object

const ArrObj = [
  { id: "a", ob: "b,", 3: "c" },
  { id: "aa", ob: "bb,", 6: "cc" },
  { id: "aaa", ob: "ccc" },
];
// console.log(ArrObj[2].id);

console.log(Object.keys(ArrObj[1]));
console.log(Object.keys(user.fullname));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(tinderObj.hasOwnProperty("name"));
