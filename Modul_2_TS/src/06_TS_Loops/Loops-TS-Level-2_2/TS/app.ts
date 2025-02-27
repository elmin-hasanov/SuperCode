const inputFeld = document.querySelector<HTMLInputElement>("#input");
const output = document.querySelector<HTMLTextAreaElement>("#output");
const submit = document.querySelector<HTMLButtonElement>("#submit");

submit?.addEventListener("click", loop);

function loop() {
    const loooop = Number(inputFeld?.value);
    if (output) {
    output.innerHTML = `L${"o".repeat((loooop))}p`;
    }
}


