//Immediately Invoked Function Expression (IIFE)

// Syntax:()()

(function f() {
    //Named IIFE
    console.log("DB CONNECTED")
})();


((name)=>{
    console.log("DB CONNECTED To "+name)

})("viral");

(function f() {
    //Named IIFE
    console.log("DB CONNECTED")
})();