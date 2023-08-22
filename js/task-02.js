const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containerEl = document.querySelector('#ingredients');
const vegetableEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList = 'ingredient';
  itemEl.textContent = ingredient;

  console.log(itemEl);

  return itemEl
});
containerEl.append(...vegetableEl);
