const fontsize = document.querySelector<HTMLInputElement>(".font-size")
const fontfam = document.querySelector<HTMLInputElement>(".font-family")
const inputfeld = document.querySelector<HTMLInputElement>(".textfeld")
const output = document.querySelector<HTMLParagraphElement>(".output")

fontsize?.addEventListener("input", changeFontSize);

function changeFontSize() {
    if (fontsize && output) {
        output.style.fontSize = fontsize.value + "px"
        console.log(fontsize.value + "px");
    }
}

fontfam?.addEventListener("input", changeFontFam);

function changeFontFam() {
    if (fontfam && output) {
        output.style.fontFamily = fontfam.value;
    }
}

inputfeld?.addEventListener("input", inputtext);

function inputtext() {
    if (inputfeld && output) {
        output.innerHTML = inputfeld.value;
    }
}