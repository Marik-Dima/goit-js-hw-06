let counterValue = 0;
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const valueInCountWindow = document.querySelector("#value");

function decrementButtonClickHandler() {
    counterValue -= 1;
    return addValue(counterValue);
};

function incrementButtonClickHandler() { 
    counterValue += 1;
    return addValue(counterValue);
};

function addValue(value) { 
    return valueInCountWindow.innerHTML = `${value}`;
};

incrementButton.addEventListener('click', incrementButtonClickHandler);
decrementButton.addEventListener('click', decrementButtonClickHandler);


