const user = {
  id: 1,
  name: "viral",
  mail: "veerljain@1234gmail.com",
  welcomeMsg: function () {
    console.log(this);
    console.log(`${this.name} welcomed`);
  },
};
user.welcomeMsg();

user.name = "kadam"; //context change
user.welcomeMsg();

console.log(this); //refer empty object in node but window is global object in browser

// ++++++++   Interseting   +++++++++
function chai() {
  console.log(this); //undefined
  let username = "kmd";
  //   console.log(this.username); //not work bcz of this not work in function only work in object
}
// chai()

const arrowFun = () => {
  console.log(this); //undefined
  console.log("mei Arrow Function hun");
};
arrowFun();

const sumTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(sumTwo(4, 9));

const sumtwoo = (num1, num2) => num1 + num2;
console.log(sumtwoo(1, 4));

// const sumtwooo = (num1, num2) =>( num1 + num2) //yaad kr lena vrna react me milte hai
// console.log(sumtwooo(14, 4));

const sumoo = (num1, num2) => ({ name: "hitrsh" }); //yaad kr lena vrna react me milte hai
console.log(sumoo(14, 4));
