const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const pass = event.currentTarget.elements.password.value;

    if (mail === "" || pass === "") {
        return alert("All fields must be filled!");
    }
    
    const formFilling = {mail, pass};
    console.log(formFilling);

    event.currentTarget.reset();
}
