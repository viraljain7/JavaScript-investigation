let name = "viral";
let oldName = new String("kadamjain");
let RollNo = 234;

console.log(`my name is ${name} [${oldName}] and rollno is ${RollNo}`);
console.log(oldName.length);
console.log(oldName.toUpperCase());
console.log(oldName.charAt(3));
console.log(oldName.indexOf("d"));

const str = oldName.substring(2, 4); //last index not includes
console.log(str);

const mystr = oldName.slice(-5, -3); //Negative value can use
console.log(mystr);

const mytrim = "   viral20%dk    ";
console.log(mytrim.trim());
console.log(mytrim.trimStart());
console.log(mytrim.trimEnd());

console.log(mytrim.replace("20%", "_"));
console.log(mytrim.includes("20%"));
console.log(mytrim.split("20%"));

//Function or Method  uses Stack -copy pass hota hai
// length
// anchor()
// at()
// big()
// blink()
// bold()
// charAt()
// charCodeAt()
// codePointAt()
// concat()
// String()
// endsWith()
// fixed()
// fontcolor()
// fontsize()
// includes()
// indexOf()
// isWellFormed()
// italics()
// lastIndexOf()
// link()
// localeCompare()
// match()
// matchAll()
// normalize()
// padEnd()
// padStart()
// repeat()
// replace()
// replaceAll()
// search()
// slice()
// small()
// split()
// startsWith()
// strike()
// sub()
// substr()
// substring()
// sup()
// toLocaleLowerCase()
// toLocaleUpperCase()
// toLowerCase()
// toString()
// toUpperCase()
// toWellFormed()
// trim()
// trimEnd()
// trimStart()
// trimEnd()
// trimStart()
// valueOf()
