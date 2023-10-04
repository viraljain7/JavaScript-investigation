// Premitive Data Types

// 7 Types:- String,Number,Boolean,Null,undefined,Smybol,BigInt

// const sym=Symbol("23")
// const sym1=Symbol("23")
// console.log(sym===sym1)
//
let bigInt=100n
console.log(typeof bigInt)

//Non_Premitive/Refernce Data Types
// Array Object Function

let Arr=[1,2,3,"viral",true]

let obj={
    name:"viral",
    id:23,
    salary:12034555
}

let fun=function(){
    console.log("hello")
}

// ++++++++++++++++++++++++++++++++
// Memory: Stack(primitive)[copy] && Heap(NonPre mtive)[refernce/OrignalValue]
let obj1={
    name:"viral",
    id:23,
    salary:12034555
}

let obj2=obj1

obj2.name="hitesh"
console.log(obj1)
console.log(obj2)