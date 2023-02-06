
const buttonChangeColor = document.querySelector(".change-color");
const colorTextMessage = document.querySelector(".color");

buttonChangeColor.addEventListener('click', handleChangeColorButtonClick);


function handleChangeColorButtonClick() {
  colorTextMessage.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorTextMessage.textContent;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};