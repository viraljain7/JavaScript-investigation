// ImmediatelyInvoked Function Expression
(function name(params) {
  console.log("global scope k Pollution ko rokne k leye ");
})(); //semicolon(;) is important

(() => {
  console.log("heelo");
})();

((name) => {
  console.log(`hello ${name}`);
})("nam"); //This is known as named IIFE
