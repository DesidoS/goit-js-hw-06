const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log("inputEl", inputEl);
console.log("outputEl", outputEl);

console.log(inputEl.value)

inputEl.addEventListener('input', (event) => {
    outputEl.textContent = event.currentTarget.value
    if (event.currentTarget.value === '') {
        outputEl.textContent = "Anonymous";
    }
}
)