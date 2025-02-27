const inputForm = document.querySelector("form");
const inputFeld = document.querySelector("#input");
const output = document.querySelector<HTMLInputElement>("#output");

inputForm?.addEventListener("submit", rechner);


function rechner() {
    if (inputFeld && output) {
        let zahl = Number(inputFeld.value);
        let calc = 2025 - zahl;
        output.innerHTML = `Du bist ${calc} Jahre alt`;
    }
}