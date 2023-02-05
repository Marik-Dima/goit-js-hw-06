const inputName = document.querySelector('#name-input');
const greetingOutputName = document.querySelector('#name-output');


inputName.addEventListener('input', (event) => { greetingOutputName.textContent = !inputName.value.trim() ? "Anonymous" : event.currentTarget.value; });

// function onInputAction(event){
// greetingOutputName.textContent = !inputName.value.trim() ? "Anonymous" : event.currentTarget.value;
// };



