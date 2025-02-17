// ! Daten anzeigen lassen in JS

// - console.log <3
// console.log("Servus beinander - extern");

// - alert
// alert("Fehler - dein email muss ein @ beinhalten")


// ! Variablen in JS
// Englisch
// camelCase
// nie mir zahlen starten
// sollte zum wert passen
// keine resevierten namen benutzen wie zb null

// * let
// kann ich im nachgang abändern
let firstName = "Marzio";
console.log(firstName);

// hier gebe ich meine variable einen neun wert
firstName = "Alessio"
console.log(firstName);



// So bekommen ich den Variablen namen und den wert
// console.log({ firstName });



// * const
// kann ich im nachgang NICHT(!!!) abändern
const lastName = "Costantini"
// geht nicht weil const
// lastName = "Meier"


// - Gutes Beispiel für let 
let spielstand = "1:1"
spielstand = "1:2"
spielstand = "1:3"


// - Gutes Beispiel für const
const geburtstag = "30.04.1993"


// ! Datentypen in JS
// - das sind Primitve datentyen

// * String
let string = "max5555!!"
let string2 = 'max555!!'
console.log(string);
// so bekomme ich den datentypen raus
console.log(typeof string);


// * Number
let pi = 233
console.log(pi);
// so bekomme ich den datentypen raus
console.log(typeof pi);


// * Boolean
// hier gibt es nur true oder false
let istVolljährig = false;
console.log(istVolljährig);


// - Schalue Datentypen sind zb Objekte, Array oder Funktionen


console.log('%c Arithmische Operationen! ', 'background: red; color: #fff');
// ! Arithmische Operationen
let a = 10;
let b = 3;
let zeichenkette = "Nina"

// console.log(a + b); // +
// console.log(a - b); // -
// console.log(a / b); // /
// console.log(a * b); // *

console.log(--a);
console.log(++a);

console.log(a + 1);
console.log(a - 1);

// Modulo 
// Hier wird mir der restwert angezeigt wenn ich zwei zahlen miteinander dividere
console.log(a % b);
console.log(11 % 3);
console.log(15 % 5);
console.log(111 % 13333); // geht nicht


console.log('%c Strings Methoden! ', 'background: red; color: #fff');
// ! Strings Methoden
let text = "Hello JavaScriptl!";

// - länge
console.log(text.length);

// - Größ-/ Kleinschriebung
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// - Teilsting
console.log(text.substring(0, 5));

// - replace und all
console.log(text.replace("l", "j"));
console.log(text.replaceAll("l", "j"));

// - slice
console.log(text.slice(6, 10));

// - endsWith() startWith()
console.log(text.endsWith("!"));
console.log(text.startsWith("h"));

// - Number
let num = "22"
console.log(num);
console.log(Number(num));

// - includes
console.log(text.includes("v"));


// * Email Validerung
let email = "marzio@super-code.com"

if (email.includes("@") && email.endsWith(".de")) {
    // alert("E-mail ist gültig, erfolgreich eingelogt");

} else {
    // alert("E-mail nicht gültig, bitte nochmal machen");
}


// * Verketten von strings
let fristName = "Marzio"
let lastName1 = "Costantini"
let age = 31
let wohnort = "Starnberg"

// - Version 1 - string concatenation
let satz = fristName + " " + lastName1 + " ist " + age + " Jahre alt und wohnt in " + wohnort
console.log(satz);


// - Version 2 <3 - template literals
let satzCool = `${fristName} ${lastName1} ist ${age} Jahre alt und wohnt in ${wohnort}.`
console.log(satzCool);

console.log('%c Number-Methoden ', 'background: red; color: #fff');
// ! Number-Methoden


// -toFixed()
// wandelt in string um und bestimmt nachkommer stelle
let pi2 = 3.772393949239493
console.log(pi2.toFixed(2)); // gibt string zurück 
console.log(Number(pi2.toFixed(2))); // gibt number zurück 


// - isIniger()
// prüft ob eine zahl ganz ist oder eien , hat
console.log(Number.isInteger(10)); //true
console.log(Number.isInteger(10.2)); //false


// - toSting()
// wandelt zahlen in einen String
let num2 = 244
console.log(num2.toString());


// - NaN
// Not A Number
// Geht nicht weil buchstaaben drinnen sind
let x = "555ssd4343d5"
console.log(Number(x));

console.log(isNaN(x));

























