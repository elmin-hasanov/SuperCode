// # Wiederholung

// - Welche Datentypen kennen wird
// String, Boolean, Number

// - Was benutzen wir zum debugen?
// console.log

// - Welche Variablentypen kennen wir 
// let (änderbar), const (nicht änderbar)

// - Was sind Aritmische Opperationen
// + - * / % ++ --

// - Was mach die string methode lenght? 
// Gib zeichen zurück -> bekommen zahl zurück

// - Was mach slice? 
// Ich kann mir ein Stück von text ausschaneiden ( zwei werte, start und ende)

// - Was mach includes?
// Ich kann in einem String nach einen bestimmt zeichen suchen 

// - Was ist der unterschied zwischen replace und replaceAll?
// replace ersetzt das erste zeichen was gesucht worden ist, replaceAll ersetzt jedes zeichen

// - Was ist NaN?
// Not a Number


// # Neues Thema

// ! Gleichheit
// Wir können string und Numbers vergleichen
let fcBayernSpielstand = 2
let fcAugsburg = 2


// - Strict Equality ===
// Vergleichen wir den datentype & den Datenwert
console.log("1" === 1);
console.log(1 === 1);
console.log("hi" === "hi");
console.log(true === false);


// - Equality ==
// vergelcht den Datenwert
console.log("1" == 1);
console.log(2 == 90);


console.log(fcBayernSpielstand == fcAugsburg);


// ! Strict Not Equal (!==)
// - ist nicht gleich
// hier frage ich ob es NICHT der seleb datenwert und Datentype ist (umgekehrt wir === )
console.log(1 !== 2); //true
console.log(10 !== "10"); //true


// ! Not Equal (!=)
// -ist nicht gleich
// hier frage ich ob es nicht der selbe datenwert ist (umgekehrt wir == )
console.log(1 != 1); // false
console.log("1" != 1); //false


// ! - Greater/Less Than
// - > = Größer
// - < = Kleiner
console.log(5 > 3) // true
console.log(10 > 9); //true
console.log(5 < 3); //false
console.log(202022 < 4000); //false
console.log(5 > 5); // false

// mit dem "=" nach dem < > frage ich zusätzlich nach gleichheit ab und NICHT nur nach größer oder kleiner als
console.log(5 >= 5); // true
console.log(10 <= 10); //true


// ! = Null und undefined

// - undefined
// undefined wir automatisch von JS vergeben

// hier deklariere ich eine Variable
let undif
// Hier bekomme ich undfined
console.log(undif);
// Hier weise ich der variable einen wert zu
undif = 44
console.log(undif);

// - null
// Wird nicht automatisch zugewiesen. Müssen wir Explizit zuweisen
let isNull = null
console.log(isNull);



// ! if-else Anweisung
// if ist ein Muss bei if-else (else is optional)

let alter = 18

// - Nur if bedigung
if (alter >= 18) {
    console.log("Du bist volljährig");
}

// - if else Bedigungn
if (alter >= 18) {
    console.log("Erwachsen :-)");
} else {
    console.log("Kind :-(");
}

// - else if - Noten
let note = 3

if (note === 1) {
    console.log("sehr gut");
} else if (note === 2) {
    console.log("gut");
} else if (note === 3) {
    console.log("Befriedeigend");
} else if (note === 4) {
    console.log("Ausreichend");
} else if (note === 5) {
    console.log("Solala gut");
} else if (note === 6) {
    console.log("ungenügend");
}
// else kommt immer ganz am ende
else {
    console.log("Kein güliger wert ");
}


// - 5 Temeratur
let temperatur = 16

if (temperatur >= 25) {
    console.log("Heute ist es Warm");
} else if (temperatur <= 15) {
    console.log("Das wetter ist kalt");
} else {
    console.log("Das wetter ist spitze");
}


// - Email Validerung
let email = "marzio@super-code.com"

// das zeichen mach eine "und" bedigung "&&""
// das zeichen mach eien "oder" bedigung "||"

if (email.includes("@") && email.endsWith(".de") || email.endsWith(".com") && email.includes(".")) {
    console.log("E-mail ist gültig, erfolgreich eingelogt");
} else {
    console.log("E-mail nicht gültig, bitte nochmal machen");
}


// # Einfache Dom-Methoden
// D = Document
// O = Object
// M = Model 


// ! document.getElementById()
// Sucht ein Element anhand seiner ID

// Hier verheiratet
let titleFürHochzeit = document.getElementById("title")

// Hier Name geändert mit innerText Methode
titleFürHochzeit.innerText = "Max"



// ! document.querySelector() <3
// Sucht eine Elment anhand einer classe, id oder Html Elment
// class = .
// id = #
let boxContainer = document.querySelector(".container")

let elminsHochzeit = document.querySelector(".elmin")
elminsHochzeit.innerText = "Qurin"


let h3 = document.querySelector("h3")
console.log(h3);

// - innerText
// Mit innerText kann ich nur text returnen
h3.innerText = "Pfiadi"


// - innerHTML
// Mit innerHTML kann ich auch html schrieben
boxContainer.innerHTML = "<div class='box'> <h1> Ich komme von JS </h1> <p>Ich bin ein p Tag </p> </div>"


// ! classList
let untererBereich = document.querySelector("footer")

// * add
//  Hinzufügen einer klasse
untererBereich.classList.add("jule")

// * remove
// Löschen einer klassse
untererBereich.classList.remove("jule")

// * toggle
untererBereich.classList.toggle("jule")


// ! Window
console.log(window);

// - Alert
// Öffnet eien popup box
// window.alert("Achtung")

// - Prompt
// let nameUser = window.prompt("Wie heißt du?")
// console.log(nameUser);

// - window.confirm
// let bestatung = window.confirm("Datenschutz akzeptieren")
// console.log(bestatung);


// * Beispiel alter prüfen und farbe setzen
let age = window.prompt("Alter bitte eingeben")

if (age >= 18) {
    // window.alert("Viel spaß beim Zocken.")
    document.body.classList.add("green")
} else {
    // window.alert("Du darfs noch nicht zocken du baby")
    document.body.classList.add("red")
}