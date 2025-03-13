const countdownElement = document.getElementById("count") as HTMLDivElement;
const roundMesageElement = document.getElementById("message") as HTMLDivElement;

if (countdownElement) {
  let counter = 10;

  let intervallPizzaFhungi = setInterval(() => {
    counter--;
    countdownElement.innerText = counter.toString();

    if (counter <= 0) {
      countdownElement.innerText = "";
      roundMesageElement.innerHTML = "";
      clearInterval(intervallPizzaFhungi);
    }
  }, 1000);
}
