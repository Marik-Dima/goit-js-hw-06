const inputFontSize = document.querySelector("#font-size-control");
const textToResize = document.querySelector("#text");


inputFontSize.addEventListener("input", (event => { 
    textToResize.style.fontSize = `${event.currentTarget.value}px`;
}))