//# Ergeanzungen zum Skript

//=> Thema Funktionen
//-> nicht mehr als 50 bis 100 Zeilen
//-> idR nur EINE Funktionalitaet / Aufabe
//-> code smell: wenn die FN ein And im Namen

//-> Paramter:
//-> keine Type-Definitionen
//! DON'T
function printUserData(superParameter: { id: string; name: string }) {
  //was auch immer die FN
}

//! DO
type User = {
  id: string;
  name: string;
};

function printUserDataBetter(superParameter: User) {
  //was auch immer die FN
}

//-> nicht mehr als 5 Parameter (=> sonst lieber ein Parameter-Objekt)
//! DON'T
function createUser(
  name: string,
  id: string,
  email: string,
  status: string,
  address: string,
  isActive: boolean
) {
  //was auch immer die FN macht
}

//Parameter-Objekt
type UserInfo = {
  name: string;
  id: string;
  email: string;
  status: string;
  address: string;
  isActive: boolean;
};

function createUserBetter(UserInfo: UserInfo) {
  //was auch immer die FN macht
}

//=> KISS-Prinzip
//-> Keep it simple, stupid
//? Code soll so einfach wie moeglich sein - unnoetige Komlexitaet vermeiden
//? Verstaendlichkeit geht vor komplizierten Verschachtelungen
//? nicht mehr als 3 Chainingaufrufe bzw. aneinandergereihte Funktionsaufrufe

//$ ======= Bsp: =======

const mateDrinks = ["Club Mate", "Mio Mio", "Flora Mate", "Thomas Henry"];

//! DON'T
// mateDrinks.forEach((drink) =>
//   drink.toLowerCase().replace(" ", "").includes("mate")
//     ? console.log("yes")
//     : console.log("false")
// );

//? verstoesst gegen das KISS Prinzip => man muss laenger drauf schauen um das zu verstehen
//? viele Methoden aneinander gehangen => code smell -> ab der 3. Aneinanderreihung sollte ich GENAU ueberlegen, ob ich das moechte
//? ergo => code aufrauemen/ besser machen => Refactoring

//% OKAY
mateDrinks.forEach((drink: string) => {
  const mateDrinkToLowerCase = drink.toLowerCase();
  const mateDrinkToLowerCaseNoSpaces = mateDrinkToLowerCase.replace(" ", "");

  if (mateDrinkToLowerCaseNoSpaces.includes("mate")) {
    console.log("yes");
  } else {
    console.log("no");
  }
});

//# DO

mateDrinks.forEach((drink: string) => {
  const mateDrinkToLowerCase = drink.toLowerCase();
  const mateDrinkToLowerCaseNoSpaces = mateDrinkToLowerCase.replace(" ", "");
  mateDrinkToLowerCaseNoSpaces.includes("mate")
    ? console.log("yes")
    : console.log("no");
});

//=> DRY-Prinzip
//-> Don't repat yourself
//? sprich: vermeide Wiederholungen im Code
//? immer uber den eigenen Code schauen und nach doppelter Logik suchen
//? ab 2 Zeilen / Dopplungen lohnt sich schon eine Funktion
//? ich nehme eine FN, wenn es an versch. Stellwn zu versch. Zeitpunkten benutzt wird
//? Loop zb auf Basis eines Arrays => wenn es nur an einer Stelle gebraucht wird

//! DON'T
function sortPriceAscending() {
  console.log("ich wurde geklickt");
  const sortedProducts = [...shopItemsArr];
  sortedProducts.sort((a, b) => a.price - b.price);
  console.log(sortedProducts);
}

function sortPriceDescending() {
  const sortedProducts = [...shopItemsArr];
  sortedProducts.sort((a, b) => b.price - a.price);
  console.log(sortedProducts);
}

//# DO
function sortProductsByPrice(order: string) {
  const sortedProducts = [...shopItemsArr];
  sortedProducts.sort((a, b) =>
    order === "ascending" ? a.price - b.price : b.price - a.price
  );
  console.log(sortedProducts);
}

sortProductsByPrice("ascending");
sortProductsByPrice("descending");
