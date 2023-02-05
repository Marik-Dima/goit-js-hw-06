const inputName = document.querySelector('#name-input');
const greetingOutputName = document.querySelector('#name-output');


inputName.addEventListener('input', (event) => {

    if (!inputName.value) { greetingOutputName.textContent = "Anonymous" }
    else {greetingOutputName.textContent = event.currentTarget.value;}
})

