// singleton - constructor 
// Object.create

// Object Literals
const mysymbol = Symbol("abc") //must to declare inorder to use in object

const JsUser = {
    [mysymbol]: "myownkey",//symbol <---important--->
    name: "viral",
    "Full name": "viral jain",
    lastLoggedIn: ["Mon", "Tue"],

    greeting: function () {
        console.log('====================================');
        console.log(`${this.name}`);
        console.log('====================================');
    }
}

console.log(JsUser.name);
console.log(JsUser["Full name"]);
console.log(JsUser[mysymbol]);
console.log(typeof JsUser[mysymbol]);
console.log(JsUser.greeting());


JsUser.name = "abc"
Object.freeze(JsUser)//used to freezed object

JsUser.name = "abcdee"// not able to change object property
console.log(JsUser);