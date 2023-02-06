
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', handleLoginFormSubmit);

function handleLoginFormSubmit(event) { 
    event.preventDefault();
    const loginData = {
        email : event.currentTarget.elements.email.value,
        password : event.currentTarget.elements.password.value,
    };

    loginData.email === "" || loginData.password === ""
        ? alert("Будь ласка, заповніть всі поля форми!")
        : console.log(loginData);
    
    event.currentTarget.reset();
};
