let user = {
    name: "viral"
}
let arr = [1, 2, 3]

// Prototype Add Only to Direct Object, Array ,Function Name 
Object.prototype.youtube = function () {
    console.log("Youtube @ChaiAurCode");
}
Array.prototype.company = function () {
    console.log("Youtube ");//prototype power provide to only Array
}
user.youtube()
arr.company()
// user.company()//error



let AnotherName = "ChaiAurCode         "
//Arrow function will not work  
String.prototype.trueLength = function () {
    console.log(`${this.trim().length}`)
}
AnotherName.trueLength()


// Inheritance will done in future