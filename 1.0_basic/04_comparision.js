console.log("2!=4 is " + (2!=4));
console.log("2<=4 is "+( 2<=4));
console.log("2>=4 is "+( 2>=4));  
console.log("2<4 is "+(2<4));
console.log("2>4 is "+(2>4));



console.log(`"2">4 is ${"2">4}`);

// the reason is that equality check == and comparison > < >= <= work differntly
// comparison convert null to number and treat as 0
// thats why this result come 
console.log("null>0 is " +(null>0));
console.log("null<0 is " +(null<0));
console.log("null==0 is " + (null==0));
console.log("null>=0 is " + (null>=0));
console.log("null<=0 is " + (null<=0));


console.log("undefined<=0 is " + (undefined<=0));
console.log("undefined>=0 is " + (undefined>=0));
console.log("undefined==0 is " + (undefined==0));
console.log("undefined>0 is " + (undefined>0));
console.log("undefined<0 is " + (undefined<0));


//strict check ===(value and datatype)

console.log(`"2"===4 is ${"2"===4}`);
  


