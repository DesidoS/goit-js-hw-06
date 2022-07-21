function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('#controls')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const amounthEl = divEl.firstElementChild
const createEl = document.querySelector('#boxes')
const newDiv = []

btnCreate.addEventListener('click', () => {
createEl.style.display = 'flex';
createEl.style.justifyContent = 'space-between';
  
  for (let i = 0; i < amounthEl.value; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.textContent = `${divEl.style.backgroundColor}`;
    divEl.width = 320;
    
    newDiv.push(divEl)
  }
  createEl.append(...newDiv)
});

btnDestroy.addEventListener('click', () => {
  createEl.innerHTML = '';
});
