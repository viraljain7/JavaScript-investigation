const randomNum = Math.floor(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const guessArr = document.querySelector(".guesses");
const remChange = document.querySelector(".lastResult");
const msg = document.querySelector(".lowOrHi");

let prevGuessArr = [];
let numOfGuess = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    guessNum = parseInt(userInput.value);
    validateNum(guessNum);
  });
}

const validateNum = (guess) => {
  if (guess < 1) {
    alert("Enter Number greater than equal to 1");
  } else if (guess > 100) {
    alert("Enter Number less than equal to 100");
  } else if (isNaN(guess)) {
    alert("Enter Valid Number");
  } else {
    prevGuessArr.push(guess);
    if (numOfGuess === 11) {
      displayGuess(guessNum);
      displayMsg(`Game Over, Random Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guessNum);
      checkGuess(guessNum);
    }
  }
};

const checkGuess = (userInput) => {
  if (randomNum > userInput) {
    displayMsg(`Number is TOO Low`);
  } else if (randomNum < userInput) {
    displayMsg(`Number is TOO High`);
  } else {
    displayMsg(`You Guessed it Right`);
    endGame();
  }
};

const displayGuess = (guess) => {
    userInput.value = "";
    guessArr.innerHTML += `${guess}, `;
    numOfGuess++;
    remChange.innerHTML=`${11- numOfGuess}`
};

const displayMsg = (msg) => {
  document.querySelector(".lowOrHi").textContent = msg;
};

const endGame = () => {
  // Add any logic for ending the game if needed
};

const newGame = () => {
  // Add any logic for starting a new game if needed
};
