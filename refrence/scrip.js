const form = document.getElementsByTagName(`form`);

const easy = document.querySelector(`.easy`);
const medium = document.querySelector(`.medium`);
const hard = document.querySelector(`.hard`);

// easy.addEventListner(`click`, () => {
//   alert(`easy`);
// });

// medium.addEventListener(`click`, () => {
//   document.write(`medium`);
// });

// hard.addEventListener(`click`, () => {
//   document.write(`hard`);
// });

let difficulty = 0;

function  setDifficulty(level) {
  difficulty = level;
  alert(difficulty);
}

// document.querySelector(`.easy`).addEventListener(`click`, setDifficulty(20));

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  container.innerHTML = '<p>This is a dynamically added paragraph.</p>';
});
