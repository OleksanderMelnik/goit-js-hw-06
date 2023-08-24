function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsEl = document.querySelector('#controls');
const createBoxesEl = controlsEl.querySelector('[data-create]');
const destroyBoxesEl = controlsEl.querySelector('[data-destroy]');
const inputEl = controlsEl.querySelector('input');


function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {

    const divEl = document.createElement('div');

    divEl.style.width = `${30 + (i * 10)}px`;
    divEl.style.height = `${30 + (i * 10)}px`;
    divEl.style.background = getRandomHexColor();

    const newDivEl = document.querySelector('#boxes');

    newDivEl.append(divEl);
  }
};

function destroyBoxes() {
  const newDivBoxesEl = document.querySelector('#boxes');

  // console.dir(newDivBoxesEl);
  
  while (newDivBoxesEl.firstChild) {
    newDivBoxesEl.removeChild(newDivBoxesEl.firstChild);
  }
};

createBoxesEl.addEventListener('click', () => {
  destroyBoxes();
  createBoxes(inputEl.value);

});

destroyBoxesEl.addEventListener('click', () => {
  destroyBoxes();
});
