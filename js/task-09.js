function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color')
const divEl = document.querySelector('.widget')
const spanEl = document.querySelector('.color')


btnChangeColorEl.addEventListener('click', () => {
  divEl.style.backgroundColor = getRandomHexColor()
  spanEl.textContent = divEl.style.backgroundColor
});