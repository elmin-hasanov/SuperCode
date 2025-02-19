const inputForm = document.querySelector("form");
const inputFeld = document.querySelector<HTMLInputElement>("#input");
const output = document.querySelector("#output");

inputForm?.addEventListener("submit", rechner);


function rechner() {
    if (inputFeld && output) {
        let zahl = Number(inputFeld.value);
        let calc = 2025 - zahl;
        output.innerHTML = `Du bist ${calc} Jahre alt`;
    }
}