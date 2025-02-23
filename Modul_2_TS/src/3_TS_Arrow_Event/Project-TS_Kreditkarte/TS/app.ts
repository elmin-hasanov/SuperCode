const nameInputForm = document.querySelector(".form");

const cardNumberInput = document.querySelector<HTMLInputElement>("#cardnumber");
const cardNumberOutput = document.querySelector<HTMLParagraphElement>(".outputnumber");

const cardHolderInput = document.querySelector<HTMLInputElement>("#cardholder");
const cardHolderOutput = document.querySelector<HTMLParagraphElement>(".outputholder");

const cardExpInput = document.querySelector<HTMLInputElement>("#expdate");
const cardExpOutput = document.querySelector<HTMLParagraphElement>(".outputexp");

const errorM = document.querySelector<HTMLParagraphElement>(".outputerror");

nameInputForm?.addEventListener("submit", numberInputFunk);

function numberInputFunk(event: Event) {
    event.preventDefault();

    if (errorM) {
        errorM.textContent = "";
    }

    if (!cardNumberInput?.value || !cardHolderInput?.value || !cardExpInput?.value) {
        if (errorM) {
            errorM.textContent = "Bitte alle Felder ausfüllen!";
            errorM.style.color = "red";
        }
        return;
    }

    if (cardNumberOutput && cardHolderOutput && cardExpOutput) {
        cardNumberOutput.innerHTML = cardNumberInput.value;
        cardHolderOutput.innerHTML = cardHolderInput.value;
        cardExpOutput.innerHTML = cardExpInput.value;
    }
}
