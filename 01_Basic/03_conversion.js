let rollNo = "11abc";
rollNo = Number(rollNo);

let No = "11";
No = Number(No);
console.table([rollNo, No]);

let a = String(NaN);
let b = String(undefined);
console.log(a, b);

console.log(+true); //Important
console.log(+""); //Important
console.log(+"v"); //Important
console.log(+[]);
console.log(+{});

//$ ToNumber
// 11abc=NaN
// 11=11
// undefined=NaN
// true=1
// false=0
//$ ToBoolean
// "V"=true
// ""=false
//$ ToString
// NaN=NaN
// undefined=undefined
