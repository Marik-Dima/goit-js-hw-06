let counterValue = 0;
const decrementButton = document.querySelector("[data-action='decrement']");  
const incrementButton = document.querySelector("[data-action='increment']");
const valueInCountWindow = document.querySelector("#value");

function decrementButtonClickHandler() {         // функція зменьшення значення змінної лічника
    counterValue -= 1;
    return addValue(counterValue);               
};

function incrementButtonClickHandler() {          // функція збільшення значення змінної лічника
    counterValue += 1;
    return addValue(counterValue);
};

function addValue(value) {                        // функція відображення значення лічника 
    return valueInCountWindow.innerHTML = `${value}`;
};

incrementButton.addEventListener('click', incrementButtonClickHandler);
decrementButton.addEventListener('click', decrementButtonClickHandler);


