const refs = {
decBtn: document.querySelector('[data-action="decrement"]'),
incBtn: document.querySelector('[data-action="increment"]'),
valueEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.decBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
});

refs.incBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
});