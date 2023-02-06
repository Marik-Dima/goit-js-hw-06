const inputForm = document.querySelector('#validation-input');


inputForm.addEventListener('blur', onInputBlur)

function onInputBlur(event){
    event.preventDefault();
    inputForm.classList.remove('valid', 'invalid');
    inputForm.classList.add(inputForm.value.length === Number(inputForm.dataset.length) ? 'valid' : 'invalid');
};

