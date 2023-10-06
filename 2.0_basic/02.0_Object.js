// singleton
//Object .create


//Object Literals

const mysym=Symbol("12")
//
const user={
    name:"viral",//In backend "name"
    "full name":"Viral Jain",
    [mysym]:"mysym", //Symbol
    mysym1:"sym",
    age:21,
    locn:"Vadodara",
    email:"ver@gmail.com",
    isLoggedIn:false,
    lastLogin:["mon","sat"]
}
//
// console.log(user.name)
// console.log(user["name"])
// console.log(user["full name"])
// console.log(user[mysym])
// // co nsole.log(user.mysym)//Not Accessable
// console.log(typeof user[mysym] )
//
// console.log(user.mysym1)
// console.log(user["mysym1"])
// console.log(typeof user.mysym1)

// console.log(user)
// user.name="vir"
// Object.freeze(user);
// user.name="viral"
// console.log(user  )



user.greeting=function(){
    console.log(
        "hello user"
    )
}

user.greetingByName=function(){
    console.log(
        `hello user ${this.name}`
    )
}

console.log(user.greeting())
console.log(user.greetingByName())





