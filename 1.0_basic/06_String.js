let str="Hitesh"
let st=new String("hit")
console.table([str,st])

//String Method/Function
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(3))
console.log(str.charCodeAt(3))
console.log(str.indexOf('e'))
console.log(str.substring(0,4)) //start to end-1 Index
console.log(str.slice(-1,2)) //Negative Index

let s="        hello%20buy    "
console.log(s.trim())

console.log(s.replace("%20",'-'))
console.log(s.includes('llo'))
console.log(s.split("%20"))
