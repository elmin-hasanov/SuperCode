//# concat()
//-> fuegt zwei oder mehr Arrays zusammen und speichert sie in einem neuen Array

const groceries: string[] = [
  "Avocado",
  "Tomate",
  "Sour Creme",
  "Cheddar",
  "Tacos",
];

const beverages: string[] = ["Wasser", "Radler", "Bionade", "Cidre"];

//const nums: number[] = [1, 45, 67];

const shoppingList = groceries.concat(beverages);
console.log(shoppingList);

//# ===== Arrays kopieren ======
//-> kopieren von einfachen Dtaentypen ist problemlos moeglich
// -> die Daten liegen auf dem sog. Stack und werden wirklich kopiert

let priceOfShoes = 69.99;
console.log(priceOfShoes);

let priceOfbackpack = priceOfShoes;
console.log(priceOfbackpack);

priceOfShoes = 79.99;
console.log(priceOfShoes);

priceOfbackpack = 59.99;
console.log(priceOfbackpack);

// -> kopieren von Arrays
const fruits = ["Ananas", "Banane", "Pfirsich", "Kirsche"];
console.log(fruits);

// ! wir kopieren hier nur die Adresse, die auf den Heap (Speicherbereich) verweist und nicht alle Werte des Arrays
// ! Änderungen auf der Kopie wirken sich auf das Original aus - das wollen wir NICHT!
// const deliciousFruits = fruits;
// console.log(deliciousFruits);
// deliciousFruits.pop();
// console.log(fruits);
// console.log(deliciousFruits);

//$ ====== sicher kopieren =======
//% kopieren mit slice ohne Parameter kopiert das ganze Array
const safeCopyWithSlice = fruits.slice();
safeCopyWithSlice.pop();
console.log(fruits);
console.log(safeCopyWithSlice);

//% kopieren mit concat ohne Parameter kopiert das ganze Array
const safeCopyWithConcat = fruits.concat();
safeCopyWithConcat.pop();
console.log(fruits);
console.log(safeCopyWithConcat);

//% 💖 Spread-Operator ... kopiert alle Elemente
const safeCopyWithSpread = [...fruits];

//% mit dem Spread-Operator kann ich direkt mehrere Arrays hintereinander haengen
const vegetables = ["Erbsen", "Champignons", "Blumenkohl"];

const fruitsAndVeggies = [...fruits, ...vegetables];
console.log(fruitsAndVeggies);

//# sort()
//-> soriert Elemente in einem Array
//-> wenn man nichts angibt, dann sortiert es auftsteigend alphabetisch

const marziosLieblingsAutos = [
  "Porsche",
  "BMW",
  "BAW",
  "Mercedes",
  "Land Rover",
  "Citroen",
  "Chrysler",
];

// const sortedArr = marziosLieblingsAutos.sort();
// console.log(marziosLieblingsAutos);
// console.log(sortedArr);

//macht direkt ein Kopie und sortiert
//const sortedArr = [...marziosLieblingsAutos].sort();

//wenn ich das Original nArray nicht veraendern moechte muss ich mir eine Kopie machen

const marziosLieblingsAutosCopy = [...marziosLieblingsAutos];

//-> localeCompare() => strings
//-> aufsteigend a.localCompare(b)
console.log(
  marziosLieblingsAutosCopy.sort((aPizza, bPizza) =>
    aPizza.localeCompare(bPizza)
  )
);

//-> absteigend b.localCompare(a)
console.log(marziosLieblingsAutosCopy.sort((a, b) => b.localeCompare(a)));

//-> numbers sortieren
const numArr = [34, 89, 46, 908, 234, 3, 347];
console.log(numArr.sort());

//% ich kann ein eigne Logik nschreiben, wie sortiert werden soll
//% sog. Sortier- oder auch Vergleichsfunktion

function sortNumAscending(a: number, b: number) {
  return a - b;
}
console.log("aufsteigend sortiert ⬇️");
console.log(numArr.sort(sortNumAscending));

function sortNumDescending(a: number, b: number) {
  return b - a;
}
console.log("absteigend sortiert ⬇️");
console.log(numArr.sort(sortNumDescending));

//-> Kurzschreibweise als Arrow Fn
// console.log(numArr.sort((a, b) => a - b));
// console.log(numArr.sort((a, b) => b - a));

//# reverse()
//-> dreht die Reihenfolge im Array herum
console.log(marziosLieblingsAutos.reverse());

//console.log(marziosLieblingsAutos.sort().reverse());

//# =============== Suchen in Arrays ================
const birds = [
  "Wellensittich",
  "Rabe",
  "Maise",
  "Specht",
  "🐧",
  "Drossel",
  "Amsel",
  "Tannenhäher",
  "🐧",
  "Adler",
  "Spatz",
];

//# indexOf()
//-> gibt die Pos. des ersten Vorkommens im Arr zurueck. wird nichts gefunden bekommen wir -1 zuueck
const indexOfPenguin = birds.indexOf("🐧");
console.log(indexOfPenguin);

//# lastIndexOf()
//-> findet das letzte Vorkommen eines Wertes
const lastIndexOfPenguin = birds.lastIndexOf("🐧");
console.log(lastIndexOfPenguin);

//# includes()
//-> prueft ob ein Elt. im Arr enthalten ist - gibt rue oder false zurueck
const isThereADodo = birds.includes("🦤");
console.log(isThereADodo);

//# find()
//-> wir koennen hier Genaueres zur Suche angeben
//-> gibt das erste Vorkommen im Arr zurueck (wird nichts gefunden bekommen wir -1 zuueck)

//                               ⬇️ hier legen wir fest, wie das einzelne Array-Element heißt (den Namen können wir frei vergeben)
//                                        ⬇️ Nach dem Pfeil legen wir fest, was bei dem einzelnen Element geprüft wird
const birdWithA = birds.find((singleBird) => singleBird.startsWith("A"));
console.log(birdWithA);

const drossel = birds.find((singleBird) => singleBird === "Drossel");
console.log(drossel);

//# ==== mehrere Elemente bearbeiten ======
// ich moechte, dass an ale Elt in birds ein "!" gehangen wird
//bisher so:
// birds[0] = birds[0] + "!";
// birds[1] = birds[1] + "!";
// birds[2] = birds[2] + "!";

//# map()
//-> wendet fuer jedes Elt des urspr. Arr. die von uns angegebene FN an
//-> erstellt ein neues Arr.

const birdsWithExclamationMark = birds.map((singleBird) => singleBird + " !");
console.log(birdsWithExclamationMark);

const itemsLength = birds.map((singleBird) => singleBird.length);
console.log(itemsLength);

const upperCaseBird = birds.map((singleBird) => singleBird.toUpperCase());
console.log(upperCaseBird);

//auch komplexere Logik ist moeglich
const birdsWithAUpperCase = birds.map((singleBird) => {
  if (singleBird.startsWith("A")) {
    return singleBird.toUpperCase();
  } else {
    return singleBird.toLowerCase();
  }
});
console.log(birdsWithAUpperCase);

//# forEach()
//-> same as map()
//! !!!!!!! erstellt KEIN neues Array !!!!

birds.forEach((singleBird) => console.log(`Das ist ein(e): ${singleBird}`));

//-> du kannst die map() und die forEach() Methode auch mit einem zusaetzlichen Parameter verwenden (=> index)

birds.forEach((singleBird, indexPizza) =>
  console.log(`Das ist ein(e): ${singleBird} und hat den index: ${indexPizza}`)
);

//# filter()
//-> ermoeglicht es, in einem Arr nach best. Bedingungen zu filtern -> wird in ein neues Arr. gespeichert
//->Unterschied zu find(): wir bekommen ALLE passenenden Elt und nicht nur den ersten Treffer zurueck

const allBirdsWithA = birds.filter(
  (singleBird) => singleBird.toLowerCase().startsWith("a")

  //alternativ
  // {
  //     return singleBird.startsWith("a") || singleBird.startsWith("A");
  //   }
);
console.log(allBirdsWithA);

const allPenguinsAndRaven = birds.filter(
  (singleBird) => singleBird === "🐧" || singleBird === "Rabe"
);

console.log(allPenguinsAndRaven);

//$ Filme filtern (Genre)
const movies = [
  "Inception - Science-Fiction",
  "Der Pate - Drama",
  "Pulp Fiction - Thriller",
  "Die Verurteilten - Drama",
  "Interstellar - Science-Fiction",
  "Das Schweigen der Lämmer - Horror",
  "Forrest Gump - Komödie",
  "Matrix - Action",
  "Schindlers Liste - Drama",
  "Ziemlich beste Freunde - Komödie",
];

const genreInput = document.querySelector<HTMLSelectElement>("#genre");
const outputDiv = document.querySelector("div");

genreInput?.addEventListener("change", filterMovies);

// function filterMovies() {
//   if (genreInput) {
//     const selectedGenre = genreInput.value;
//     // console.log(selectedGenre);

//     const allMoviesWithSelectedGenre = movies.filter((movie) =>
//       movie.includes(selectedGenre)
//     );

//     console.log(allMoviesWithSelectedGenre);

//     if (outputDiv) {
//       outputDiv.innerText = allMoviesWithSelectedGenre.join(", ");
//     }
//   }
// }

function filterMovies() {
  if (genreInput) {
    const selectedGenre = genreInput.value;
    // console.log(selectedGenre);

    const allMoviesWithSelectedGenre = movies.filter((movie) =>
      movie.includes(selectedGenre)
    );

    console.log(allMoviesWithSelectedGenre);

    const allMoviesOnlyTitle = allMoviesWithSelectedGenre.map((movie) => {
      const splittedMovie = movie.split(" - ");
      console.log(splittedMovie);
      const onlyTitle = splittedMovie[0];
      return onlyTitle;
    });

    // Tristan
    // movies.replace(`- ${selectedGenre}`, "")
    console.log(allMoviesOnlyTitle);

    if (outputDiv) {
      // outputDiv.innerText = allMoviesWithSelectedGenre.join(", ");
      allMoviesOnlyTitle.forEach(
        (movie) => (outputDiv.innerHTML += `<p>${movie}</p>`)
      );
    }
  }
}