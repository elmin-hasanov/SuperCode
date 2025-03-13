//! ====== APIs ======
//- = Programmierschnittstelle
//- Kommunikation zwischen 2 Softwaresystemen
//- zb. verbindung frontend und backend
//- aber auch daten (Wetterdaten, random cat facts, new, usw)

//- meisten API's sind sog. REST-APIS's (Representational State Transefer)
//- REST = Architekturstil
//- REST ist ein Konzept. dass die weitergabe von Daten (ueber das Internet) mit Hilfe des HTTP- oder HTTPS-Protokolls ermoeglicht

//# Request, Response
//- Request: Was moechte ich?
//- Response: Was habe ich?

//- Request und Request sind idR im sog. JSON Format
//- JSON (JavaScript Object Notation)
//- ein Datensatz in JSON- ist immer von geschweiften Klammern umschlossen, Schluessel-Wertpaare sind durch ein Komma getrennt, die Schluessel(Keys) muessen in doppelten anfuehrungszeichen gesetzt werden

//# fetch-APIs
//- die fetch-API bietet eine Schnittstelle zum Abrufen von Daten.
//- fetch -> gibt einen sog. Promise zureuck (fuer die Daten aus der Schnittstelle)
//- und dann koennen wir weiterarbeiten mit den Daten

console.log(fetch("https://catfact.ninja/facts"));

//# .then()
//- ist eine Methode, die aufgerufen wird, wenn d. Promise erfuellt /erfolgreich ist
//- sie nimmt eine FN entgegen, die den Wert d Promises enthaelt

//# .catch()
//- ist eine Methode, die aufgerufen wird, wenn d. Promise fehlschlaegt
//- sie nimmt eine FN entgegen, die den Wert den Fehler enthaelt

type Fact = {
  fact: string;
  //   length: number;
};

// fetch("https://catfact.ninja/facts")
//   .then((res) => res.json())
//   .then((dataPizza) => {
//     console.log(dataPizza);

//     const dataArray = dataPizza.data;
//     console.log("hier ein Array???", dataArray);

//     dataArray.forEach((singleFact: Fact) => {
//       console.log(singleFact.fact);
//     });
//   })
//   .catch((err) => console.log(err));

// //$ zapfe die cats API an
// //$ gebe die Fakten als li im HTML aus (im catFactsContainer)

// const output = document.querySelector<HTMLLIElement>(".cat-facts-container");

// fetch("https://catfact.ninja/facts")
//   .then((response) => response.json())
//   .then((dataPizzaFunghi) => {
//     console.log(dataPizzaFunghi);
//     const dataArryFunghi = dataPizzaFunghi.data;
//     dataArryFunghi.forEach((singleFact: Fact) => {
//       if (output) {
//         output.innerHTML += `<li style="margin-bottom: 20px">${singleFact.fact}</li>`;
//         output.style.marginBottom = "20px";
//       }
//     });
//   });
// //$ ==================================================================

//: cats API mit Seiten zum umblaettern
const output = document.querySelector<HTMLLIElement>(".cat-facts-container");

let backwardLink = "https://catfact.ninja/facts?page=34";
let forwardLink = "https://catfact.ninja/facts?page=2";

//// Erstelle einen back Button
const backBtn = document.createElement("button");
backBtn.textContent = "Go back";
backBtn.addEventListener("click", () => fetchCatFacts(backwardLink));
document.body.appendChild(backBtn);

//// Erstelle einen forward  Button
const forwardBtn = document.createElement("button");
forwardBtn.textContent = "Go forward";
forwardBtn.addEventListener("click", () => fetchCatFacts(forwardLink));
document.body.appendChild(forwardBtn);

function fetchCatFacts(url: string) {
  console.log("diese URL wiurd angezapft:", url);
  fetch(url)
    .then((response) => response.json())
    .then((dataPizzaFunghi) => {
      console.log(dataPizzaFunghi);
      if (output) output.innerText = "";
      const dataArryFunghi = dataPizzaFunghi.data;
      dataArryFunghi.forEach((singleFact: Fact) => {
        if (output) {
          const liItem = document.createElement("li");
          liItem.innerText = singleFact.fact;
          output.appendChild(liItem);
        }
      });
      forwardLink = dataPizzaFunghi.next_page_url;
      backwardLink = dataPizzaFunghi.prev_page_url;
    })
    .catch((err) => console.log(err));
}

fetchCatFacts("https://catfact.ninja/facts");

//: ==================================================================
