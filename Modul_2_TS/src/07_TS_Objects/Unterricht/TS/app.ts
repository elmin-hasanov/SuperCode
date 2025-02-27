//# Objekte
console.log("%c 🎉 Heute: Objekte 🎉", "background-color: green");

const movieTitle = "Dune";
const movieYear = 2021;
const movieDirector = "Denis Villeneuve";
const movieDescription = "Leute machen Sachen im Sand";
const movieActors = ["Timothee Chalamet", "Rebecca Ferguson"];
const movieRating = 4.8;
//% ⬆️ diese Variablen haben keinen Zusammenhang

//-> Ein Objekt ist eine Datenstruktur, bei der wir Eigenschaften und deren Datentypen buendeln / zusammenfassen koennen.

const duneMovie = {
  title: "Dune",
  year: 2012,
  director: "Denis Villeneuve",
  description: "Leute machen Sachen im Sand",
  actors: ["Timothee Chalamet", "Rebecca Ferguson"],
  rating: 4.8,
};

const jurassicParkMovie = {
  title: "Jurassic Park",
  year: 1993,
  director: "Steven Spielberg",
  description: "Roooaaaarr",
  actors: ["Jeff Goldblum"],
};

//# Type
//-> In TypeScript gibt es vorgegebene Typen wie number, string oder array, die angeben, welche Werte etwas haben darf.
//-> Wenn diese Typen nicht ausreichen, können wir eigene Typen definieren, um genauer zu beschreiben, was erlaubt ist.
//-> Wir können also z. B. für unser Movie-Objekt einen echten Type Movie anlegen.
//-> mit type können wir Typinformationen an einen Namen (hier: Movie) zueweisen, und sie dann über diesen verwenden
type Movie = {
  title: string;
  year: number;
  director: string;
  description: string;
  actors: string[];
  rating?: number; // ? => diese Eigenschaft ist optional
};

//-> Wir können jetzt unseren eigenen Type Movie verwenden wie andere Datentypen, indem wir ihn mit einem Doppelpunkt hinter unsere Variable schreiben.
const derPateMovie: Movie = {
  title: "Der Pate",
  year: 1972,
  director: "Francis Fors Coppola",
  description: "🔫",
  actors: ["Al Pacino", "Marlon Brando"],
  rating: 4.8,
  // genre: "Action" // geht nicht, da genre nicht in Movie definiert ist
};

//-> auch bei Arrays koennen wir den Typen Movie verwenden
const movies: Movie[] = [duneMovie, jurassicParkMovie, derPateMovie];
console.log("hier mein movies Array:", movies);

// types koennen alles moegliche sein
//type ISBN = number | string //=> sog. Union-Type

//# Zugriff auf Objekte
console.log("%c ===== Zugriff auf Objekte ====", "background-color: green");
//-> ueber den Namen des Objekts und dann den namen der Eigenschaft / Key => Punktnotation

console.log(movies[1]);
//-> wie greife ich auf die actors zu?
console.log(movies[1].actors);

//-> wie greife ich im movie array auf den duneMovie plus das rating zu?
console.log(movies[0].rating);

//-> wie greife ich im movie array auf den derPateMovie plus die description zu?
console.log(movies[2].description);

//-> wie sortiere ich ein number-Array aufsteigend?
const numArr = [2, 45, 76, 987, 54, 1];
numArr.sort((a, b) => a - b);
console.log(numArr);

//-> wie sortiere ich die Filme (moivies Array) nach ihrem Erscheinungsjahr aufsteigend
movies.sort((a, b) => a.year - b.year);
console.log("filme sortiert nach Erscheinungsjahr aufsteigend", movies);

//-> auch bei Objekten koennen wir Werte veraendern (analog zu arrays)
duneMovie.title = "Dune: Part One";
console.log("Dune geanderter Titel", duneMovie);

//$ geht nicht, da year vom Typ number sein muss
//$ wir versuchen hier einen string zu speichern
//duneMovie.year = "2022"

//# Object.keys & Object.values
console.log("%c =====  keys und values ====", "background-color: green");

//-> du kannst dir alle Nmaen aller Eigenschaften (= Keys) ,it der Methode Object.keys() ausgeben lassen
console.log("Keys 🔑");
console.log(Object.keys(duneMovie));

//-> du kannst dir alle Werte aller Eigenschaften (die value) des Objektes mit der Methode Objec.values() ausgeben lassen
console.log("Values 🖊️");
console.log(Object.values(duneMovie));

//# Kopieren von Objekten
console.log("%c =====  Kopieren ====", "background-color: green");
//-> fuer Objekte gilt wie beim Kopieren von Arrays:
//-> Aenderungen an einer Kopie wirken sich auf das Original aus
//-> weil nur der Verweis auf die Speicheradresse kopiert wird

const originaObject = {
  name: "Christian",
  age: 30,
  pokemonkarten: ["Pikachu", "Glumanda"],
};

// hier speichere ich nur den Verweis auf die Speicheradresse
// ich aendere das Original Objekt komplett mit
const copiedObject = originaObject;
copiedObject.age = 31;
copiedObject.pokemonkarten.push("Bisasam");
console.log("originalOject", originaObject);
console.log("copiedOject", copiedObject);

// shallow copy -> hier bleibt weiter nur der Verweis auf d Array im Objekt -> sprich das original Array wird auch mit veraendert
const realCopiedObject = { ...originaObject };
realCopiedObject.age = 32;
realCopiedObject.pokemonkarten.push("David Hasslehoff");
console.log("originalOject", originaObject);
console.log("realCopiedOject", realCopiedObject);

// deep copy => wenn wir auch kopierte Arrays haben wollen
//$ variante 1
const deepCopy = JSON.parse(JSON.stringify(originaObject));
deepCopy.pokemonkarten.push("Tischbein");
console.log(deepCopy);

//$ variante 2
const deepCopy2 = structuredClone(originaObject);
deepCopy2.pokemonkarten.push("Elisian");
console.log(deepCopy2);

//$ variante 3
const deepCopy3 = {
  ...originaObject,
  pokemonkarten: [...copiedObject.pokemonkarten],
};

//# Interfaces
console.log("%c =====  Interfaces ====", "background-color: green");
//-> Alternative zu type, um Eigenschaften und deren Datentypen fuer unser Objekt fest zu definieren
//-> Schluesselwort: interface
//-> wir brauchen hier kein =
//-> ansonsten sieht die Definition gleich aus (wie bei type)

interface IMovie {
  title: string;
  year: number;
  director: string;
  description: string;
  actors: string[];
  rating?: number; // ? => diese Eigenschaft ist optional
}

const matrixMovie: IMovie = {
  title: "Matrix",
  year: 1999,
  actors: ["Keanu Reves", "Laurence Fishburne"],
  director: "Lana Wachowski",
  description: "🔴🔵????",
};

//$ ==== wann type und wann interface ? ======
//// generell Geschmackssache....
//// type eignet sich gut fuer einfache Typdefinitionen oder bei der Verwendung von Union-Types
type ISBN = number | string;
type Response = "yes" | "no" | "maybe";

let answer: Response = "yes";
//answer = "ja sicher!" // Fehler!, da "ja sicher!" nicht im type Response enthalten ist

//// Interface eignet sich wenn du Objektstrukturen definierst und diese erweitern moechtest
interface IDetailedMovie extends IMovie {
  genre: string[];
}

const terminatorMovie: IDetailedMovie = {
  title: "Terminator",
  year: 1984,
  actors: ["Arni"],
  director: "James Cameron",
  description: "🤖",
  genre: ["Action", "Sci-Fi"],
};

console.log(terminatorMovie);

//# Enums
console.log("%c ======== Enums ========", "background-color: darkgreen");
//-> Enum ist eine Liste von vordefinierten Optionen, die man einer Variablen zuweisen kann
//->ist nuetzlich, um sicherzustellen, dass eine Variable nur bestimmte Werte annehmen kann

const mondayMina = "Montag";
const mondayMona = "Monday";
const mondayHao = "Mo";

function printDay(day: string) {
  if (day === "Monday" || day === "Montag" || day === "Mo") {
    console.log("Today is Monday");
  }
}

printDay(mondayMina);

//-> indem wir ein Enum mit vordefinierten Wochentagen anlegen, dass alle verwenden koennen, koennen wir so ein Chaoswie in der printDay Funktion vermeiden
//% = gemeinsames Vokabelbuch

enum Weekdays {
  Monday, // = 0
  Tuesday, // = 1
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(Weekdays);
console.log(Weekdays.Monday);
console.log(Weekdays.Tuesday);

const monday = Weekdays.Monday;
console.log(Weekdays[monday]);
console.log(Weekdays[0]);

enum Weekdays2 {
  Monday = "Montag",
  Tuesday = "Dienstag",
  Wednesday = "Mittwoch",
  Thursday = "Donnertag",
  Friday = "Freitag",
  Saturday = "Samstag",
  Sunday = "Sonntag",
}

console.log(Weekdays2.Monday);

enum OrderStatus {
  Created = "Created",
  Accepted = "Accepted",
  InProgess = "In Progress",
  InDelivery = "In Delivery",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

const oder4373 = {
  number: 4373,
  customerNumber: 354790,
  status: OrderStatus.Created,
};

oder4373.status = OrderStatus.InDelivery;

console.log("Bestellung wurde verschickt , Status =>", oder4373.status);