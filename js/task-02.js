const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainerEl = document.querySelector('#ingredients')

const ingredientEl = []
ingredients.forEach((number) => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = number;
  return ingredientEl.push(listEl)
});
listContainerEl.append(...ingredientEl)


