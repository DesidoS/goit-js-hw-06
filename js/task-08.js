const formEl = document.querySelector(".login-form");
console.log("formEl", formEl)

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    }
    
    console.log({
        email:email.value,
        password: password.value,
    })



  event.currentTarget.reset();
}
