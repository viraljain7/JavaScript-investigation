// var c=23
// let a=309
// if(true){
//     let a=20
//     const b=3
//     var c=4  //Scope Issue
//     }
// console.log(c)
// console.log(a)
// console.log(b)



// function one() {
//     const username="vir"
//
//     function two() {
//         const website="youtube"
//         console.log(username)
//     }
//
//     // console.log(website)
//     two()
// }
// one()





// if(1){
//     const nam="viral"
//     if(1){
//         const web="youtube"
//         console.log(nam+ web)
//     }
//     // console.log(web)
// }
// // console.log(nam)


k(5)
function k(num) {
    console.log(num)
}

// m(8)//Error due to Hositing
let m=function (num) {
    console.log(num)
}