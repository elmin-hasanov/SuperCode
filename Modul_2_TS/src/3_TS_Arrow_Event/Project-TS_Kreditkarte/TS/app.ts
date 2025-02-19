const nameInputForm = document.querySelector(".box");

const cardNumberInput = document.querySelector<HTMLInputElement>("#cardnumber");

const cardNumberOutput = document.querySelector<HTMLParagraphElement>(".outputnumber");


nameInputForm?.addEventListener("submit", numberInputFunk);

function numberInputFunk(event: Event) {
    event.preventDefault();

    let cardNumber;
  
    if (cardNumberInput) {
      cardNumber = cardNumberInput.value;
    }
    
    if (cardNumberOutput && cardNumberInput) {
        cardNumberOutput.innerHTML = cardNumberInput.value;
    }
}






const cardHolderInput = document.querySelector<HTMLInputElement>("#cardhold")

const cardHolderOutput = document.querySelector<HTMLParagraphElement>(".outputholder")


const cardExpInput = document.querySelector<HTMLInputElement>("#expdate")

const cardExpOutput = document.querySelector<HTMLParagraphElement>(".outputexp")



