`use strict`;

// storing elements in the variable

// html elemnts
// input box
const guessBox = document.querySelector(`.guess`);

// check btn
const checkButton = document.querySelector(`.check`);

// again btn
const again = document.querySelector(`.again`);

// message
const message = document.querySelector(`.message`);

// score
const score = document.querySelector(`.score`);

// highscore
const highscore = document.querySelector(`.highscore`);

// secret number
const num = document.querySelector(`.number`);

// body
const body = document.querySelector(`body`);

// secret number from 1 to 20
const secretNum = Math.floor(Math.random() * 20) + 1;

// storing the secretNum
let newSecNum = secretNum;

alert(secretNum);

// logic

// function to tell the user the  input is correct or not
const changeMessage = () => {
  let newScore = score.textContent;

  // giving hint to the user that the number is correct or not
  if (!guessBox.value) {
    // when the number above 20
    message.textContent = `Please enter your number ...`;
  } else if (guessBox.value > newSecNum) {
    // when the number is higher than secret number
    message.textContent = `To High !! 😅`;

    if (score.textContent > 0) {
      //to update score
      score.textContent--;
    }
    // to update message
    if (score.textContent == 0) {
      // to update message
      message.textContent = `you loose the game...`;

      // to update background
      body.style.backgroundColor = `#f95959`;

      again.style.color = `#f95959`;

      checkButton.style.color = `#f95959`;

      num.style.color = `#f95959`;
    }
  } else if (guessBox.value < newSecNum) {
    // when the number is lower than the secret number
    message.textContent = `To Low !! ☹️`;

    if (score.textContent > 0) {
      //to update the score
      score.textContent--;
    }
    // to update message
    if (score.textContent == 0) {
      // to update message
      message.textContent = `you loose the game...`;

      // to update background
      body.style.backgroundColor = `#f95959`;

      again.style.color = `#f95959`;

      checkButton.style.color = `#f95959`;

      num.style.color = `#f95959`;
    }
  } else if (guessBox.value == newSecNum) {
    // when the number is correct
    message.textContent = `Winner 🎊`;

    // to change colour
    body.style.backgroundColor = `#60b347`;

    // to update the highscore
    highscore.textContent = newScore;

    // to show the correct number
    num.textContent = newSecNum;

    again.style.color = `#60b347`;

    checkButton.style.color = `#60b347`;

    num.style.color = `#60b347`;

    again.addEventListener(`mouseover`, () => {
      again.style.color = `#458930`;
      // again.style.border = `4px solid #458930`;
      again.style.boxShadow = `2px 2px 4px #458930`;
    });

    again.addEventListener(`mouseout`, () => {
      again.style.color = `#60b347`;
    });

    checkButton.addEventListener(`mouseover`, () => {
      checkButton.style.color = `#458930`;
      // again.style.border = `4px solid #458930`;
      checkButton.style.boxShadow = `2px 2px 4px #458930`;
    });

    checkButton.addEventListener(`mouseout`, () => {
      checkButton.style.color = `#60b347`;
    });

  }
};

// function to reset the values
const resetValue = () => {
  // to reset message
  message.textContent = `start guessing...`;

  // to reset num
  num.textContent = `?`;

  // to reset score
  score.textContent = 20;

  // to reset input value
  guessBox.value = ``;

  // to reset baground colour
  body.style.backgroundColor = `#a9bff6`;

  // to reset secret number
  let secNum = Math.floor(Math.random() * 20) + 1;

  // reassining the value os newSecNum
  newSecNum = secNum;

  again.style.color = `#9090f5`;

  checkButton.style.color = `#9090f5`;

  num.style.color = `#9090f5`;

  again.addEventListener(`mouseenter`, () => {
    again.style.color = `#9090f5`;
  });

  again.addEventListener(`mouseout`, () => {
    again.style.color = `#60b347`;
  });

  checkButton.addEventListener(`mouseover`, () => {
    checkButton.style.color = `#9090f5`;
    // again.style.border = `4px solid #458930`;
    // checkButton.style.boxShadow = `2px 2px 4px #458930`;
  });

  num.addEventListener(`mouseenter`, () => {
    num.style.color = `#9090f5`;
  });

  checkButton.addEventListener(`mouseout`, () => {
    checkButton.style.color = `#60b347`;
  });
};

// listening the events on web page
// again button
again.addEventListener(`click`, resetValue);

// check button
checkButton.addEventListener(`click`, changeMessage);