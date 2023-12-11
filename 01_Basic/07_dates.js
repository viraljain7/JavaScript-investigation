let date = new Date(); //current date
console.log(date);
console.log(date.toString());
console.log(date.toDateString()); //date only
console.log(date.toLocaleDateString()); //date & time only
console.log(typeof date); //object

// Custom Date
let customDate = new Date(2023, 11, 23); //23/12/2023
let customDate1 = new Date(2023, 11, 23, 23, 59, 59); //23/12/2023 at 23:59:59
let customDate2 = new Date("2023-11-23"); //23/12/2023 yy/mm/dd
let customDate3 = new Date("11-30-2023"); //30/12/2023 mm/dd/yy
console.log(customDate.toLocaleDateString());
console.log(customDate1.toString());
console.log(customDate2.toLocaleDateString());
console.log(customDate3.toLocaleDateString());

// TimeStamp
let myTimeStamp = Date.now(); //Exact Date & Time
console.log(myTimeStamp);
// console.log(myTimeStamp.toLocaleDateString());//Not working
console.log(Math.floor(myTimeStamp / 1000)); //get sec in mss

//get Day,date,time,month,year
let MyDate = new Date(2023, 11, 23, 23, 59, 59); //23/12/2023 at 23:59:59
console.log(
  `custom date is
   ${MyDate.getDate()}/${
    MyDate.getMonth() + 1
  }/${MyDate.getFullYear()} @ ${MyDate.getHours()}:${MyDate.getMinutes()}:${MyDate.getSeconds()} Day:${MyDate.getDay()} `
);
console.log(MyDate.getHours());
console.log(MyDate.getMinutes());
console.log(MyDate.getSeconds());
console.log(MyDate.getDay());
console.log(MyDate.getDate());
console.log(MyDate.getMonth() + 1);
console.log(MyDate.getFullYear());

//3:06:00 to 3:10:00 watch
