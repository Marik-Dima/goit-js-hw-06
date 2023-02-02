const formInputName = document.querySelector('#name-input');
const formOutputName = document.querySelector('#name-output');

formInputName.addEventListener("input", (event) => {

if (!formInputName.value) { formOutputName.textContent ="Anonymous"
    
} else { formOutputName.textContent = event.currentTarget.value;
    
}
})