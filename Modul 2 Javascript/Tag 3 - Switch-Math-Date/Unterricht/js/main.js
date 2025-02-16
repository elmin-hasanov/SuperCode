// ! ===== Wiederholung =====
//$ #1
//$ Wir deklarieren eine Variable alter und weisen ihr einen Wert zu.
//$ Die if-Bedingung prüft, ob das Alter größer oder gleich 18 ist.
//$ Wenn die Bedingung wahr ist, wird die Meldung "Du bist volljährig." ausgegeben.
//$ Andernfalls (else) wird die Meldung "Du bist noch minderjährig." ausgegeben.

let alter = 20;

if (alter >= 18) {
  console.log("Du bist volljährig.");
} else {
  console.log("Du bist noch minderjährig.");
}

//$ #2
//$ Wir deklarieren eine Variable number und weisen ihr einen Wert zu.
//$ Die if-Bedingung prüft, ob die Zahl zwischen 0 und 50 liegt.
//$ Wenn die Bedingung wahr ist, wird die Meldung "Die Zahl liegt zwischen 0 und 50." ausgegeben.
//$ die nächste Bedingung prüft, ob die Zahl zwischen 51 und 100 liegt.
//$ Wenn die Bedingung wahr ist, wird die Meldung "Die Zahl liegt zwischen 51 und 100." ausgegeben.
//$ Andernfalls (else) wird die Meldung "Die Zahl ist entweder größer als 100 oder kleiner als 0." ausgegeben.

let number = 25;

if (number >= 0 && number <= 50) {
  console.log("Die Zahl liegt zwischen 0 und 50.");
} else if (number >= 51 && number <= 100) {
  console.log("Die Zahl liegt zwischen 51 und 100.");
} else {
  console.log("Die Zahl ist entweder größer als 100 oder kleiner als 0.");
}

//$ #3
//$ Wir deklarieren eine Variable userName und fragen den Benutzer nach seinem Namen ab. (window.prompt)
//$ Die if-Bedingung prüft, ob der Name leer ist (userName === "").
//$ Wenn der Name leer ist, wird die Meldung "Bitte gib deinen Namen ein." im HTML ausgegeben.
//$ Andernfalls wird eine Begrüßung mit dem eingegebenen Namen im HTML ausgegeben.

// let userName = window.prompt("Wie heißt du?");
// let userOutput = document.querySelector(".name-output");

// if (userName === "") {
//   userOutput.innerText = "Bitte gib deinen Namen ein.";
// } else {
//   userOutput.innerText = "Hallo " + userName + " :)";
// }

// ! =========== neue Themen ===========
//# ====== switch =======
console.log("%c ===== switch ======", "color: red");

let randomErrorNumber = 3;

if (randomErrorNumber === 1) {
  console.log("Schwerer Fehler");
} else if (randomErrorNumber === 2) {
  console.log("Mittelschwerer Fehler");
} else if (randomErrorNumber === 3) {
  console.log("Leichter Fehler");
} else {
  console.log("Alles top!");
}

//->  mit Switch
switch (randomErrorNumber) {
  case 1:
    console.log("Schwerer Fehler");
    break;
  case 2:
    console.log("Mittelschwerer Fehler");
    break;
  case 3:
    console.log("Leichter Fehler");
    break;
  default:
    console.log("Alles top!");
    break;
}

let number2 = 25;

switch (true) {
  case number2 >= 0 && number2 <= 50:
    console.log("Die Zahl liegt zwischen 0 und 50.");
    break;
  case number2 >= 51 && number2 <= 100:
    console.log("Die Zahl liegt zwischen 51 und 100.");
    break;
  default:
    console.log("Die Zahl ist entweder größer als 100 oder kleiner als 0.");
    break;
}

//-> switch mit Fallthrough

// const fruitOrVegetable = window.prompt("Gib mir ein Obst oder Gemüse");

// switch (fruitOrVegetable) {
//   case "Banane":
//   case "Apfel":
//   case "Birne":
//     console.log("Das ist eine Frucht");
//     break;
//   case "Brokkoli":
//   case "Karotte":
//   case "Lauch":
//     console.log("Das ist ein Gemüse");
//     break;
//   default:
//     console.log("Jo keine Ahnung was das ist");
//     break;
// }

//# ====== Math =======
console.log("%c ===== Math ======", "color: red");

const PI = Math.PI;
// console.log(PI);

//aufrunden -> immer auf die naechste ganze Zahl
// console.log(Math.ceil(PI));

// abrunden -> immer auf die naechste ganze Zahl
// console.log(Math.floor(PI));
// console.log(Math.floor(3.9999));

// runden nach den gaengigen Reglen (ab 0.5 aufrunden)
// console.log(Math.round(PI));
// console.log(Math.round(3.5));
// console.log(Math.round(3.4678346474));

//console.log(Number(PI.toFixed(3)));

// min und max
// console.log(Math.min(1, 3, 56, 7, 90)); // findet die kleinste Zahl
// console.log(Math.max(1, 3, 56, 7, 90)); // findet die groesste Zahl

// Zufallszahlen
console.log(Math.random()); // Math.random() erzeugt eine Zufallszahl zwischen 0 und 1 (wobei die 1 niemals erreicht wird)

console.log(Math.random() * 10); // generiert eine Zufallszahl zwischen 0 und 10 (exklusive)

console.log(Math.floor(Math.random() * 10)); // Zufallszahl zwischen 0 und 9 (inklusive)

//$ ich möchte eine Zufallszahl zwischen 1 und 10 generieren!
const randomNum = Math.ceil(Math.random() * 10);
console.log("hier", randomNum);

//alternativ
//const anotherRandomNum =  Math.floor(Math.random() * 10) + 1;

// Verwende eine switch-Anweisung, um die folgenden Fälle abzudecken:
// Wenn die Zahl kleiner als 5 ist, soll "Kein Fehler" ausgegeben werden.
// wenn die Zahl kleiner als 8 ist, soll "Warnung" ausgegeben werden.
// Andernfalls soll "Fehler" ausgegeben werden.

switch (true) {
  case randomNum < 5:
    console.log("Kein Fehler");
    break;

  case randomNum >= 5 && randomNum < 8:
    console.log("Warnung");
    break;

  default:
    console.log("Fehler");
    break;
}

//# ===== Date ======
//-> Die Date-Bibliothek hilft uns mit Daten und Uhrzeiten zu arbeiten. Sie ist in der Sprache JavaScript mit eingebaut.
console.log("%c ===== Date ======", "color: red");

const today = new Date();
console.log(today);

const startDate = new Date(0);
console.log(startDate); //Da alle Computer bei 1.1.1970 um 0 Uhr anfangen zu zählen, kommt so der ausgegebene Wert zustande. Die 1 Uhr kommen zustande, weil wir mit der Mitteleuropäische Normalzeit arbeiten, sprich der Uhrzeit 1 Stunde hinzuaddiert wird.

const birthday = new Date("1994-11-09");
console.log(birthday);

//new Date(Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde)
// Ein Datum benötigt mindestens als Angabe das Jahr und den Monat. Sonst wird es in Millisekunden angegeben. (siehe oben)
const projectStartDate = new Date(2025, 1, 14);
console.log(projectStartDate);

//Wochentag (So = 0, Mo = 1, Di = 2, usw.)
console.log("Project Start Wochentag: ", projectStartDate.getDay());

// Tag
console.log("Project Start Tag: ", projectStartDate.getDate());

//Monat - Zaehlung beginnt bei 0
console.log("Project Start Monat: ", projectStartDate.getMonth());

// Jahr
console.log("Project Start Jahr: ", projectStartDate.getFullYear());

// getTime -> Anzahl an Millisekunden seit dem 01.01.1970
console.log(projectStartDate.getTime());

//% Formatierung
console.log(projectStartDate.toLocaleString());
console.log(projectStartDate.toLocaleString("en-GB"));
console.log(projectStartDate.toLocaleString("en-US"));
console.log(projectStartDate.toLocaleString("de-DE", { timeZone: "UTC" }));

//# === ternary expression =====
//-> Dreigeteilter Ausdruck => [Bedinung] ? [ausfuehren, wenn wahr] : [ausfueheren, wenn falsch]
console.log("%c ===== ternary expression ======", "color: red");

const isOnline = Math.random() <= 0.5;
console.log(isOnline);

if (isOnline) {
  console.log("user is online");
} else {
  console.log("user is offline");
}

const message = isOnline ? "user is online" : "user ist offline";
console.log(message);

//# ===== nullish coalescing operator ====
//- Eine super praktische Erleichterung  ist die Schreibweise mit ??, wenn du checken willst ob eine Variable NICHT null oder undefined ist.
console.log("%c ===== nullish coalescing operator ======", "color: red");

let userName;

//? Langschreibweise
const output =
  userName !== null && userName !== undefined ? userName : "Unkown Pizza";

console.log(output);

//? Kurzschreibweise
userName = "Hao";
const output2 = userName ?? "Unkown Kaiserschmarrn";
console.log(output2);