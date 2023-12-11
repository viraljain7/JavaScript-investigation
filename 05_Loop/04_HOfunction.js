// forEach   //higher Order Function 

let arr = [1, 2, 3, "viral", true]
let arr2 = [1, 2, 3, "viralj", true]
arr.forEach((value, key, arr) => {
    console.log(key, " :- ", value, arr);
})


const obj1 = [{
        "lang": "a",
        "id": "b,",
        "code": "c"
    },
    {
        "lang": "aa",
        "id": "bb,",
        "code": "cc"
    },
    {
        "lang": "aaa",
        "code": "ccc"
    }
]
obj1.forEach((value,key)=> {
    console.log(key," :-",value.id);
});