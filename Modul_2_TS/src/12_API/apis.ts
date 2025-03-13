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

//- zapfe die cats API an
//- gebe die Fakten als li im HTML aus (im catFactsContainer)

const output = document.querySelector<HTMLLIElement>(".cat-facts-container");

fetch("https://catfact.ninja/facts")
  .then((response) => response.json())
  .then((dataPizzaFunghi) => {
    console.log(dataPizzaFunghi);
    const dataArryFunghi = dataPizzaFunghi.data;
    dataArryFunghi.forEach((singleFact: Fact) => {
      if (output) {
        output.innerHTML += `<li style="margin-bottom: 20px">${singleFact.fact}</li>`;
        output.style.marginBottom = "20px";
      }
    });
  });
