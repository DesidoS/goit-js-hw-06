const formEl = document.querySelector(".login-form");
const nameEl = formEl.firstElementChild
const passwordEl = nameEl.nextElementSibling
const buttonEl = formEl.lastElementChild
const userData = {}

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    }
    userData.email = email.value
    userData.password = password.value
    console.log(userData)

  event.currentTarget.reset();
}
