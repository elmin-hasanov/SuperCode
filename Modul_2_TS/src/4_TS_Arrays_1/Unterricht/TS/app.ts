// # Arrays

// const shoppingListItem1 = "toilet paper";
// const shoppingListItem2 = "beer";
// const shoppingListItem3 = "ice cream";

//-> Arrays sind Listen und keine einzelnen Vraiablen mit nur einem Wert
//-> wir koennen mehrere Werte unter einem einzigen Variablennamen speichern

//$ Array (string) deklarieren

const shoppingItems: string[] = [
  "Toilet Paper",
  "Beer",
  "Ice Cream",
  "Peanuts",
  "Coffee",
  "Broccoli",
];

// wie greife ich auf die einzelnen Elt des Arrays zu?
// => []
// [0] ist immer das erste Elt., [1] ist das zweite, usw...

console.log("shopingItems 4. Element: ", shoppingItems[3]);

//$ number-Array
//                         [0]   [1]   [2]    [3]
const prices: number[] = [12.99, 2.5, 34.99, 99.99];
console.log(prices[1]);

//$ boolean-Array
const booleanArray: boolean[] = [true, false, false, true, true];

//$ wir koennen direkt einen Wert im Array setzen
// dazu verwenden wir den Index-Zugriff [] und ein =
shoppingItems[3] = "Peanut Butter";
console.log(shoppingItems);

//# Array Methoden
//$ lenght: gibt die Laenge des Arrays zurueck (= die Anzahl der Elt.)
console.log("Laenge des Arrays: ", shoppingItems.length);

//$ push(): am Ende desd Arrays ein neues Elt. einfuegen
//$ gibt die neue Laenge das Arrays zurueck
const lenghtAfterPasta = shoppingItems.push("Pasta");
console.log(shoppingItems);
console.log(lenghtAfterPasta);

//% es koennen auch mehrere Elt. auf einmal eingefuegt werden
shoppingItems.push("Pizza", "Soap");
console.log(shoppingItems);

//$ pop(): am Ende des Arrays ein Elt. entfernen
//$ gibt den Wert des entfernten Elt. zurueck
const removedItem = shoppingItems.pop();
console.log(shoppingItems);
console.log("Entferntes Elt.: ", removedItem);

//$ shift(): erstes Elt. aus dem Array entfernen
//$ gibt den Wert des entfernten Elt. zurueck
const firstElement = shoppingItems.shift();
console.log(shoppingItems);
console.log("Entferntes Elt.:", firstElement);

//$ unshift(): vorne Elt. einfuegen
//$ gibt die neue Laenge das Arrays zurueck
const lenghtAfterUnshift = shoppingItems.unshift("Tea", "Cookies");
console.log(shoppingItems);
console.log("Laenge nach unshift():", lenghtAfterUnshift);

// # ========== splice, slice, split =============
console.log(
  "%c ===== splice, slice, split ======",
  "background-color: darkgreen;"
);

const shoppingItems2: string[] = [
  "Toilet Paper",
  "Beer",
  "Ice Cream",
  "Peanuts",
  "Coffee",
  "Broccoli",
];

//$ splice(): fuegt an einer best. Stelle neue Elt. hinzu oder entfernt sie
// wir wollen "Pasta" einfuegen (Pasta soll index 3 bekommen / an der Stelle stehen)
//                    ⬇️ index, an dem einfuegen wollen / starten wollen
//                        ⬇️ deleteCount,wie viele Elt. sollen entfernt werden
//                            ⬇️ neues Elt. - was eingefuegt werden soll
shoppingItems2.splice(3, 0, "Pasta");
console.log(shoppingItems2);

// wie entferne ich Pasta und Peanuts?
const splicedElement = shoppingItems2.splice(3, 2);
console.log(shoppingItems2);
console.log(splicedElement);

// was passiert wenn ich bei splice nur 1 Zahl angebe
// ich loesche ab dem angegebenen index
const exampleArray: string[] = ["test", "test1", "test2", "test3", "test4"];
exampleArray.splice(2);
console.log(exampleArray);

// wie fuege ich "Eggplants" nach "toilet Paper" ein??
shoppingItems2.splice(1, 0, "Eggplants");
console.log(shoppingItems2);

// $ slice(): zum kopieren (von Teilen) des Arrays
// $ das Original Array bleibt erhalten

// ganzes Array kopieren
const allItemsSliced = shoppingItems2.slice();
console.log("ganzes Array kopiert ⬇️");
console.log(allItemsSliced);

// wie kopiere ich mir "coffee" und "brokkoli"??
// slice ab index 4
const sliceFrom4 = shoppingItems2.slice(4);
console.log("ab index 4 kopiert ⬇️");
console.log(sliceFrom4);

// wie kopiere ich mir "Ice Cream" und "Coffee" ?
//! bei slice muss der 2. Wert IMMER eins weiter sein, weil er sonst nicht mehr dabei ist
// slice ab index 3 bis index 5 => index 5 ist exklusive
const sliceExample = shoppingItems2.slice(3, 5);
console.log(sliceExample);

//$ split() teilt ein String in mehrere Teile auf
// $ Ergebnis ist ein string Array

const songText = "Atemlos durch die Nacht Spür was Liebe mit uns macht";
const singleWords = songText.split(" ");
console.log(singleWords);

const hangman = "Kronkorkenzackenzaehlmaschine";
const singleLetters = hangman.split("");
console.log(singleLetters);

// jetzt teilen wir beim Punkt =< ich will einzelne Saetze
const lyrics =
  "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you";
const lyricsSentences = lyrics.split(".");
console.log(lyricsSentences);

//$ join() fuehrt ein string Array zu einem gesamten String zusammen
console.log(lyricsSentences.join(" * * *"));
console.log(lyricsSentences.join());

console.log(singleLetters.join(""));