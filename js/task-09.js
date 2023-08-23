function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  const colorEl = getRandomHexColor();

 
  document.body.style.background = colorEl;
  document.querySelector('.color').textContent = colorEl;
}

const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', changeBodyColor);