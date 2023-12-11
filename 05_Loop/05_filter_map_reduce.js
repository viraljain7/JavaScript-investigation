let arr=[1,2,3,40,50]
let ans=arr.filter((value)=>{
    return value>=3
}).filter((value)=>{
    return value>=50
})
console.log(ans);

let mapk=arr.map((value)=>{
    return value+=3
})
console.log(mapk);

let intialvalue=0;
let reduce=arr.reduce((accumulator,value)=>{
    console.log( ` Accumaltor : ${accumulator} and Value : ${value}`);
    return accumulator+value
},intialvalue)
console.log(reduce);




let Cart=[
    {"price":99},
    {"price":199},
    {"price":1399},
    {"price":949}
]

let sum=Cart.reduce((acc,value)=>{
    return acc+value.price
},0)
console.log(sum);