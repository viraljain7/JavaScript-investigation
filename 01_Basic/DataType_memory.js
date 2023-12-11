// Datatypes : 2

// premitive (stack):  string , Number, boolean ,BigInt, undefined, null,Symbol  //copy pass

// Reference (heap) (non premitive) : Array, Object,Function  //orignal value pass

let name = "viral";
let num = 34;
let logged = false;
let bignum = 1234567890n;
let don;
let done = null;
let sy = Symbol("se");

let arr = [1, 2, "ram", true];
let myobj = {
  name: "viral",
  salary: 10000,
};
let myfun = () => {
  return "hello"; //Return type : function
};

console.table([name, num, logged, bignum, don, done, sy]);
console.log(arr, myobj, myfun());
console.table([
  typeof name,
  typeof num,
  typeof logged,
  typeof bignum,
  typeof don,
  typeof done,
  typeof sy,
  typeof arr,
  typeof myobj,
  typeof myfun,
]);
