console.log("%c ====== Timig Events ======", "color: orange");
//! Timing Events
// -> Timing bzw. Zeitgeberfunktionen, die uns das BOM zur Verfügung stellt
// -> es gibt zwei, die wir nutzen können

//# setTimeout
//-> man kann eine Zeit def., nach der etwas ausgefuehrt wird
//? mache nach 2 Sekunden iwas
//? 1. Parameter: dieFN/ die Callback FN, die ausgefuehrt wird
//? 2. Parameter: die Anzahl der Millisekunden, wann das passieren soll
//? 2 Sek = 2000 Millisekunden

window.setTimeout(() => {
  console.log("Die 2 Sekunden sind um");
}, 2000);

// setTimeout(() => {
//   window.alert("Schauen Sie noch weiter????");
// }, 5000);

//-> alternative zur anoymen FN
setTimeout(irgendeineFN, 2000);

function irgendeineFN() {
  console.log("Ich mache Sachen");
}

//# setInterval
//-> man kann eine Zeit def., nach der immer wieder etwas ausgefuehrt wird
//? mache alle 2 Sekunden iwas
//? 1. Parameter: dieFN/ die Callback FN, die ausgefuehrt wird
//? 2. Parameter: die Anzahl der Millisekunden, wann der Code immer wieder ausfeguehrt wird
//? 2 Sek = 2000 Millisekunden

// setInterval(() => {
//   console.log("2 Sekunden sind vorbei");
// }, 2000);

//# clearInterval
//-> ACHTUNG: wir muessen setInterval in einer Variablen speichern, um es wieder loeshcen zu koennen
const intervalToDelete = setInterval(() => {
  console.log("2 Sekunden sind vorbei");
}, 2000);

clearInterval(intervalToDelete);

//# weiter Bsp:
//-> ich will alle 2 Sek etwas in der Consoloe ausgeben und nach 4x aufhoeren

let counter = 0;

const intervallPizza = setInterval(() => {
  counter++;
  if (counter <= 4) {
    console.log("Peel the Avocado");
  } else {
    clearInterval(intervallPizza);
    console.log("Guacamole");
  }
}, 2000);

//-> Countdown
//-> jede Sek. soll der Countdown um 1 nach unten gezaehlt werden

const countdownElement = document.querySelector<HTMLDivElement>("#countdown");

if (countdownElement) {
  countdownElement.style.fontSize = "4rem";
  let counter = 11;

  let intervallPizzaFhungi = setInterval(() => {
    counter--;
    countdownElement.innerText = counter.toString();

    //bei 0 aufhoeren / Intervall loeschen
    if (counter === 0) {
      countdownElement.innerText = "💥";
      clearInterval(intervallPizzaFhungi);
    }
  }, 1000);
}
