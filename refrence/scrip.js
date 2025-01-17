const form = document.getElementsByTagName(`form`);

const easy = document.querySelector(`easy`);
const medium = document.querySelector(`medium`);
const hard = document.querySelector(`hard`);

easy.addEventListner(`click`, () => {
  alert(`easy`);
});

medium.addEventListener(`click`, () => {
  document.write(`medium`);
});

hard.addEventListener(`click`, () => {
  document.write(`hard`);
});
