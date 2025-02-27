// - Erstelle ein Formular, in dem du eine Zahl eingeben kannst. 
// Daneben steht ein Button, der eine Funktion ausführt und zwar "Verdoppel mich".
// Du sollst also eine Function deklarieren, die den Wert aus deinem Input-Feld mit 2 multipliziert.
// Das Ergebnis wird schließlich in deinem HTML ausgegeben.
// - **Bitte halte dich an den Typescript-Standard.**


const inputForm = document.querySelector("form");
const inputFeld = document.querySelector<HTMLInputElement>("#input");
const output = document.querySelector("#output");

inputForm?.addEventListener("submit", rechner);

function rechner() {
    if (inputFeld && output) {
        let zahl = Number(inputFeld.value);
        let calc = 2 * zahl;
        output.innerHTML = `${calc}`;
    }
}