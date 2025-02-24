//# Schleifen
//-> dienen dazu, Code mehrfach zu durchlaufen
//-> die fuehren eine Anweisung (oder eine Gruppe von Anweisungen) so lange aus, bis eine best. Bedingung erfuellt ist (oder nicht mehr erfuellt ist)

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

//# ==== for-Scleife =====
//- aufbau:
//- for (start, condition, step) {
//- hier kommt Code rein
//- }

//+    Anfangswert          Bedingung    Zähler
//         ⬇️                  ⬇️          ⬇️
for (let index: number = 1; index <= 5; index++) {
    console.log("Hello World");
  }
  
  //$ index/ i = best practice
  //$ dennoch frei waehlbar
  
  //!!!! ACHTUNG!!!! Infinity Loop !!!!
  //-> wenn eine Bedinung NICHT erfuellt werden kann, erzeugen wir einen sog. Infinity Loop
  //-> wir starten zB mit index = 6 und die Bedinung ist >= 5 => kann NIEMALS erreicht werden
  
  // for (let i = 6; i >= 5; i++) {
  //   console.log(i);
  // }
  
  //?hier beginnen wir bei 12 mitt dem Zaehlen und wir brechen den loop ab, denn der index nicht mehr kleiner als 24 ist
  for (let i = 12; i < 24; i++) {
    console.log("aktueller index:", i);
  }
  
  //                        ⬇️ i = i + 2
  for (let i = 0; i < 20; i += 2) {
    console.log("+2", i);
  }
  
  //? wir koennen den index auch herunter zaehlen
  for (let i = 20; i >= 0; i--) {
    console.log("countdown:", i);
  }
  
  //? alle Zahlen von 0 bis 30 durchgehen und ich moechte nur die ausgeben, die durch 3 teilbar sind
  for (let i = 0; i <= 30; i++) {
    //   i % 3 === 0 ? console.log(i) : "";
    if (i % 3 === 0) {
      console.log(i);
    }
  }
  
  //? alle Zahlen von 1 bis 10 ausummieren
  // Schreib einen loop  das die Summe der Zahlen von 1 bis 10 berechnet.
  
  // Anforderungen:
  // Benutz eine for-Schleife, um die Zahlen von 1 bis 10 zu durchlaufen.
  // Initialisier eine Variable sumOfNumbers mit dem Wert 0, um die laufende Summe zu speichern.
  // Innerhalb der Schleife addier den aktuellen Wert des Schleifenindex zur Variable sumOfNumbers.
  // Gib bei jedem Schleifendurchlauf die aktuelle Summe zusammen mit dem Wert des Schleifenindex in der Konsole aus.
  // Gib am Ende der Schleife die Gesamtsumme der Zahlen von 1 bis 10 in der Konsole aus.
  
  let sumOfNumbers = 0;
  
  for (let i = 1; i <= 10; i++) {
    console.log(`${sumOfNumbers} plus ${i} = ⬇️`);
    sumOfNumbers += i;
    if (i === 10) {
      console.log("Wir sind am Ender der Schleife angekommen");
    }
    console.log(sumOfNumbers);
  }
  
  //? ein Array durchlaufengeht auch mit for loop
  const numbersToEleven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
  console.log(numbersToEleven.length);
  
  for (let i = 0; i < numbersToEleven.length; i++) {
    console.log("Element meines Arrays:", numbersToEleven[i]);
  }
  
  //? => 💓 nutzt besser forEach/ map 💓
  numbersToEleven.forEach((num) => {
    console.log("Element meines Arrays:", num);
  });
  
  //?  wir koennen uns ein Array auch mit einer for-Schleife befuellen
  //? wir legen uns vorher ein leeres Array an
  const numbersToTwenty = [];
  
  for (let i = 1; i <= 20; i++) {
    numbersToTwenty.push(i);
  }
  
  console.log(numbersToTwenty);
  
  //# ==== while - Schleife =====
  //-> alternative zum for loop
  //-> wir muessen unseren Zaehler selbst anlegen und auch selbst (in der Schleife) hochzaehlen
  
  let counterForWhile = 10;
  
  while (counterForWhile < 10) {
    console.log("Hello world from while loop");
    counterForWhile++;
  }
  
  //? mit while kann man auch auf einen userInput reagieren
  
  let userInput = "";
  
  // while (userInput !== "STOP") {
  //   userInput = window.prompt("Bitte gib einen Text ein") ?? "";
  // }
  
  //# ==== do-while ====
  //-> der Unterschied zum while-loop ist, dass bei d do-while-loop der Code mind. 1x ausgefuehrt wird
  //-> (bevor die Bedingung geprueft wird)
  
  let counter = 5;
  
  do {
    console.log("Hello from DO WHILE");
  } while (counter < 5);
  
  //$ VS while
  while (counter < 5) {
    console.log("Hello from WHILE");
  }
  
  //? do while counter
  let doWhileCounter = 1;
  
  do {
    console.log(doWhileCounter);
    doWhileCounter++;
  } while (doWhileCounter <= 10);
  
  //# === for of loop =====
  const meals = ["Fischstaebchen", "Doener", "Pommes", "Steak", "Gemuespiesse"];
  
  //-> mit for of kann ich ein array durchlaufen und erhalte in jedem schleifendurchlauf das aktuelle Array Element
  
  for (const singleMeal of meals) {
    console.log(singleMeal);
  }
  
  //? alternativ zum for of loop kannst du natuerlich auch forEach bbenutzen 💓
  meals.forEach((singleMeal) => console.log(singleMeal));
  
  //# break
  //-> mit break kannst du Schleifen komplett abrechen
  
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
  
  console.log("die Laenge des Arrays / Anzahl der Elemente: ", birds.length);
  console.log("Das gesamte Array: ", birds);
  
  console.log("%c ----break-----", "color: red");
  for (let i = 0; i < birds.length; i++) {
    if (birds[i] === "🐧") {
      break;
    }
  
    console.log(birds[i]);
  }
  
  //# continue
  //-> damit kannst du den aktuellen Schleifendurchlauf abbrechen und direkt zum naechsten Durchlauf springen
  
  console.log("%c ----continue-----", "color: red");
  for (let i = 0; i < birds.length; i++) {
    if (birds[i] === "🐧") {
      continue;
    }
  
    console.log(birds[i]);
  }