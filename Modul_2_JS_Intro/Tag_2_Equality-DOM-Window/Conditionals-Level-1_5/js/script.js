let wert = (Number(window.prompt("Bitte hier die Punkteanzahl angeben")))

if (wert >= 90) {
    console.log("Sehr gut ( Bestanden ✅ )"), document.body.classList.add("green");
} else if (wert >= 75 && wert <= 89 ) {
    console.log("Gut ( Bestanden ✅ )"), document.body.classList.add("green");
} else if (wert >= 50 && wert <= 74 ) {
    console.log("Befriedigend ( Bestanden ✅ )"), document.body.classList.add("green");
} else if (wert >= 0 && wert <= 49 ) {
    console.log("Nicht bestanden ❌"), document.body.classList.add("red");
} else {
    console.log("❌ Ungültige Punktzahl ❌");
}