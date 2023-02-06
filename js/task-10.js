
const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");



createBtn.addEventListener('click', createBoxesMarkup);
destroyBtn.addEventListener('click', destroyBoxes);



function createBoxesMarkup(amount) {
  amount = Number(input.value);
  const boxesStack = new Array(amount).fill("");
  
  boxesStack.map((value, index) => {
    boxesStack.forEach((element)=> {
      value = document.createElement("div");
      value.style.width = 30 + index * 10 + "px";
      value.style.height = 30 + index * 10 + "px";
      value.style.backgroundColor = getRandomHexColor();

    });
  boxesStack.push(value); 
  });
  return boxesEl.append(...boxesStack);
}


function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
