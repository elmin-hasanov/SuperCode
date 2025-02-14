let einkaufswert = Number(window.prompt ("Einkaufswert eingeben"));

let rabatt;

if (einkaufswert > 100) {
    rabatt = 0.2;
    console.log("Du bekommst 20% Rabatt");
    
} else if (einkaufswert >= 50 && einkaufswert <= 100) {
    rabatt = 0.1;
    console.log("Du bekommst 10% Rabatt");

} else {
    rabatt = 0;
    console.log("Kein Rabatt!");
    
}

let rabattbetrag = einkaufswert * rabatt;

let verkauspreis = einkaufswert - rabattbetrag;

console.log("Einkaufwert: " + einkaufswert + "€");
console.log("Rabatt: " + (rabatt * 100) + "%");
console.log("Rabattbetrag: " + rabattbetrag + "€");
console.log("Endpreis: " + verkauspreis + "€");