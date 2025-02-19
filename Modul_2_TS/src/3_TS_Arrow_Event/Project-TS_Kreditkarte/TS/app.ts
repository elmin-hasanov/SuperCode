const nameInputForm = document.querySelector(".box");

const cardNumberInput = document.querySelector<HTMLInputElement>("#cardnumber");
const cardNumberOutput = document.querySelector<HTMLParagraphElement>(".outputnumber");

const cardHolderInput = document.querySelector<HTMLInputElement>("#cardholder");
const cardHolderOutput = document.querySelector<HTMLParagraphElement>(".outputholder");

const cardExpInput = document.querySelector<HTMLInputElement>("#expdate");
const cardExpOutput = document.querySelector<HTMLParagraphElement>(".outputexp");

nameInputForm?.addEventListener("submit", numberInputFunk);

function numberInputFunk(event: Event) {
    event.preventDefault();

    if (cardNumberInput && cardHolderInput && cardExpInput && cardNumberOutput && cardHolderOutput && cardExpOutput) {
        cardNumberOutput.innerHTML = cardNumberInput.value;
        cardHolderOutput.innerHTML = cardHolderInput.value;
        cardExpOutput.innerHTML = cardExpInput.value;
    }
}