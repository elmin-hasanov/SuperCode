//$ HTML mit TS verheiraten
//Runden
const rundenAnzeige = document.querySelector(".runden-anzeige");
const gesamteRunden = document.querySelector(".gesamte-runden");
const gespielteRunden = document.querySelector(".gespielte-runden");
const rundenAnzahlAuswahl = document.querySelector(".runden-anzahl");

//Spielstaende
const spielstandSpieler = document.querySelector(".spielstand-spieler");
const spielstandComputer = document.querySelector(".spielstand-computer");

// Anzeige fuer gewonnen, verloren, usw
const actionOutput = document.querySelector(".action-output");

// Buttons
const btnArea = document.querySelector(".choices");
const schereBtn = document.querySelector<HTMLButtonElement>(".schere");
const steinBtn = document.querySelector<HTMLButtonElement>(".stein");
const papierBtn = document.querySelector<HTMLButtonElement>(".papier");

//reset Btn
const resetBtn = document.querySelector<HTMLButtonElement>(".reset");

//$ Variablen global festlegen (Runden , Spielstande)
// var um die aktuelle Runde zu zaehlen
let aktuelleRunde = 0;

//var um die spielsatende zu zaehlen
let spielerPunkte = 0;
let computerPunkte = 0;

//var um die Computer Auswahl zu speichern
let computerChoice = "";

//$ FN schreiben wo eine zufällige computerChoice generiert wird
function randomPCChoice() {
  //zufaellige Zahl generieren zw. 1 und 3
  const randaomNum = Math.floor(Math.random() * 3) + 1;

  if (randaomNum === 1) {
    computerChoice = "Schere";
  } else if (randaomNum === 2) {
    computerChoice = "Stein";
  } else {
    computerChoice = "Papier";
  }
}

//$ Eventlistener auf die Buttons legen
schereBtn?.addEventListener("click", () => playGame("Schere"));
steinBtn?.addEventListener("click", () => playGame("Stein"));
papierBtn?.addEventListener("click", () => playGame("Papier"));

//$ Hauptfunktion playGame
function playGame(userChoice: string) {
  randomPCChoice();
  const roundsInput = document.querySelector<HTMLInputElement>(
    "input[name='num-of-rounds']:checked"
  );

  // neue Variable um die gesamte Ruinden Anzahl (Nutzerauswahl) zu speichern
  const gesamteRundenZahl = Number(roundsInput?.value);
  if (
    gesamteRunden &&
    rundenAnzahlAuswahl &&
    rundenAnzeige &&
    gesamteRunden &&
    gespielteRunden &&
    spielstandSpieler &&
    spielstandComputer &&
    actionOutput &&
    btnArea
  ) {
    //runden ins HTML
    rundenAnzahlAuswahl.classList.add("display-none");
    rundenAnzeige.classList.add("display-block");
    gesamteRunden.innerHTML = gesamteRundenZahl.toString();

    //Runden hochzaehlen
    aktuelleRunde++;
    gespielteRunden.innerHTML = aktuelleRunde.toString();

    //wer hat verloren /gewonnen + Punkte verteilen
    if (
      (userChoice === "Schere" && computerChoice === "Papier") ||
      (userChoice === "Stein" && computerChoice === "Schere") ||
      (userChoice === "Papier" && computerChoice === "Stein")
    ) {
      spielerPunkte++;
      actionOutput.innerHTML = "Du hast gewonnen";
    } else if (userChoice === computerChoice) {
      actionOutput.innerHTML = `Unentschieden. Beide haben ${userChoice} gewaehlt`;
    } else {
      computerPunkte++;
      actionOutput.innerHTML = "Du hast verloren";
    }

    //spielstand ins HTML schreiben
    spielstandSpieler.innerHTML = spielerPunkte.toString();
    spielstandComputer.innerHTML = computerPunkte.toString();

    // spiel beenden beim erreichen der gesamtRundenAnzahl
    if (aktuelleRunde === gesamteRundenZahl) {
      if (spielerPunkte === computerPunkte) {
        actionOutput.innerHTML = `Unentschieden! Du & der Computer haben jeweils ${spielerPunkte} Punkte.`;
      } else if (spielerPunkte > computerPunkte) {
        actionOutput.innerHTML =
          "Glueckwunsch du hast den Computer geschlagen!!!";
      } else {
        actionOutput.innerHTML = "Du hast leider gegen den Computer verloren";
      }

      btnArea.classList.add("display-none");
    }
  }
}

// A.) FN ausführen die die random PC Choice generiert (die von Punkt 3)
// B) rundenanzahl auslesen und in einer Variablen speichern (totalRounds/ gesamtRundenAnzahl) zb:
//  const roundsInput = document.querySelector<HTMLInputElement>(
//     'input[name="num-of-rounds"]:checked'
//   );
// const gesamteRunden = Number(roundsInput.value);

// C) gesamte Runden ins HTML ausgeben
// D) aktuelleRunde hochzaehlen
// E) aktuelle Runde ins HTML ausgeben
// F) Logik um zu schauen wer gewonnen hat + die Punkte hoch zählen
// G) Spielstand ins HTML schreiben
// H) spiel beenden wenn aktuelleRunden und gesamtRunden gleich sind (zb auch noch die Btns deaktivieren)

//$ reset FN
resetBtn?.addEventListener("click", resetGame);

function resetGame() {
  spielerPunkte = 0;
  computerPunkte = 0;
  aktuelleRunde = 0;

  if (
    rundenAnzahlAuswahl &&
    rundenAnzeige &&
    spielstandSpieler &&
    spielstandComputer &&
    actionOutput &&
    btnArea
  ) {
    rundenAnzeige.classList.remove("display-block");
    rundenAnzahlAuswahl.classList.remove("display-none");
    btnArea.classList.remove("display-none");

    spielstandSpieler.innerHTML = "0";
    spielstandComputer.innerHTML = "0";

    actionOutput.innerHTML = "Lass uns spielen";
  }
}