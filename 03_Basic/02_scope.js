var c = 300;
{
  let a = 20;
  const b = 40;
  var c = 4;
}

console.log(c);
// console.log(a); //scope error
// console.log(b);//scope error

// ++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++

function one() {
  const username = "viral";

  function two() {
    const website = "youtube";
    console.log(website + username);
  }
  two();
  // console.log(website); //scope error
}
one();
// console.log(username); //scope error

// +++++++++++++++++++     Intersting           +++++++++++++++++++++++++

console.log(sum1(4)); //working {hositing}
function sum1(num) {
  return num;
}
console.log(sum1(4));

// console.log(sum2(40));// not working
const sum2 = function (num) {
  return num;
};
console.log(sum2(40));
