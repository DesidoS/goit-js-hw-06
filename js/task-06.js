const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', (event) => { 
    if (event.currentTarget.value.length !== 6 ) {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
    else {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')

    }
})