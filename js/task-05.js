const inputName = document.querySelector('#name-input');
const greetingOutputName = document.querySelector('#name-output');


inputName.addEventListener('input', onInputAction);

function onInputAction(event){

    if (!inputName.value.trim()) { greetingOutputName.textContent = "Anonymous" }
    else {greetingOutputName.textContent = event.currentTarget.value;}
};

