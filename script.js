`use strict`;

// importing another js file contents

// html elemnts
// input box
const guessBox = document.querySelector(`.guess`);

// check btn
const checkButton = document.querySelector(`.check`);

// message
const message = document.querySelector(`.message`);

// score
const attempt = document.querySelector(`.attempt`);

// highscore
const highscore = document.querySelector(`.highscore`);

// secret number
const num = document.querySelector(`.number`);

// body
const body = document.querySelector(`body`);

// level buttons
const level = document.querySelectorAll(`.level`);

// all buttons
const buttons = document.querySelectorAll(`.btn`);

// rules
// btn
const rule = document.querySelector(`.rules-btn`);
// rule window
const rulesBook = document.querySelector(`.rule-book`);
// close btn
const close = document.querySelector(`.close`);

const showRulesBook = false;

// let tempHighscore = 0;
let tempHighscore = 0;

// to let the user know the level is selected or not
let levelSelected = false;

// store the number generated by system
let secretNum;

// to set difficulty level based on user selection
const setDifficulty = (lvl) => {
  // to change the difficulty
  if (lvl == `easy`) {
    levelSelected = true;
    guessBox.value = ``;
    // attempt
    attempt.textContent = 5;
    // hint message
    message.textContent = `Guess a number between 1 and 20`;
    // to change the difficulty to easy
    return 20;
  } else if (lvl == `medium`) {
    levelSelected = true;
    guessBox.value = ``;
    // attempts
    attempt.textContent = 7;
    // hint message
    message.textContent = `Guess a number between 1 and 50`;
    // to change the difficulty to medium
    return 50;
  } else if (lvl == `hard`) {
    levelSelected = true;
    guessBox.value = ``;
    // attempts
    attempt.textContent = 10;
    // hint message
    message.textContent = `Guess a number between 1 and 100`;
    // to change the difficulty to hard
    return 100;
  }
};

const lvlEvent = () => {
  level.forEach((level) => {
    level.addEventListener(`click`, (event) => {
      // to target the buttons difficulty attribute
      let levels = event.target.getAttribute(`difficulty`);
      // to set the difficulty level
      let value = setDifficulty(levels);
      // to generate the random number
      secretNum = Math.floor(Math.random() * value) + 1;
      console.log(secretNum);

      return value;
    });
  });
};

lvlEvent();

// store the system generated number
let newSecNum = secretNum;

// check the user entered number
const check = () => {
  // level is not selected
  if (levelSelected == false) {
    message.textContent = `😒Please select a level`;
  } else {
    // level is selected
    // user does not enter the number
    if (!guessBox.value) {
      message.textContent = `😕Please guess a number`;
    } else {
      // game logic

      //user entered number is too high
      if (guessBox.value > secretNum) {
        message.textContent = `Too High`;
        // attempts deduction
        if (attempt.textContent > 0) {
          attempt.textContent = attempt.textContent - 1;
        }
        if (attempt.textContent == 0) {
          message.textContent = `😢You lost the game`;
          body.style.backgroundColor = `#f95959`;
          num.style.color = `#f95959`;
          again.style.display = `block`;
          buttons.forEach((button) => {
            button.style.color = `#f95959`;
          });
        }
      }
      //user entered number is too low
      if (guessBox.value < secretNum) {
        message.textContent = `Too Low`;
        if (attempt.textContent > 0) {
          attempt.textContent = attempt.textContent - 1;
        }
        if (attempt.textContent == 0) {
          message.textContent = `😢You lost the game`;
          body.style.backgroundColor = `#f95959`;
          num.style.color = `#f95959`;
          again.style.display = `block`;
          num.style.color = `#f95959`;
          buttons.forEach((button) => {
            button.style.color = `#f95959`;
          });
          level.disabled = true;
        }
      }
      //user entered number is correct
      if (guessBox.value == secretNum) {
        message.textContent = `🎉Correct Guess`;
        body.style.backgroundColor = `#60b347`;
        num.textContent = secretNum;
        tempHighscore += 5;
        highscore.textContent = +tempHighscore;
        again.style.display = `block`;
        num.style.color = `#60b347`;
        buttons.forEach((button) => {
          button.style.color = `#60b347`;
        });
      }
    }
  }
};

checkButton.addEventListener(`click`, check);

// again btn
const again = document.querySelector(`.btn.again`);

// restart the game
const playAgain = () => {
  guessBox.value = ``;
  message.textContent = `Choose a level`;
  body.style.backgroundColor = `#a9bff6`;
  num.textContent = `?`;
  again.style.display = `none`;
  levelSelected = false;
  num.style.color = `#a9bff6`;
  buttons.forEach((button) => {
    button.style.color = `#a9bff6`;
  });
  leve.disabled = false;
};

again.addEventListener(`click`, playAgain);

// rules
const showRules = () => {
  rulesBook.style.display = `block`;
};

const closeRules = () => {
  rulesBook.style.display = `none`;
};

const closeTxt = () => {
  close.textContent = `x`;
};

const closeText = () => {
  close.textContent = `close`;
};

// show rules
rule.addEventListener(`click`, showRules);

// close rules
close.addEventListener(`click`, closeRules);

// close text
close.addEventListener(`mouseover`, closeTxt);

// close text
close.addEventListener(`mouseout`, closeText);
