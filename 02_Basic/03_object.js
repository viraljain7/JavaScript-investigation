// singleton
// Object.create

// Object Literals
const mysymbol=Symbol("abc") //must Step 
const JsUser={
name:"viral",
EmpId:20,
"Full name":"viral jain",
salary:20000,
lastLoggedIn:["Mon","Tue"],
[mysymbol]:"symbol",//symbol,

greeting: function () {
    console.log('====================================');
    console.log(`${this.name}`);
    console.log('====================================');  
}
}

console.log(JsUser.name);
console.log(JsUser.EmpId);
console.log(JsUser["Full name"]);
console.log(JsUser[mysymbol]);
console.log(typeof JsUser[mysymbol]);
console.log(JsUser.greeting());


JsUser.name="abc"
Object.freeze(JsUser)
JsUser.name="abcdee"
console.log(JsUser);