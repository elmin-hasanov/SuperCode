console.log("%c ====== BOOOOOM ======", "color: orange");
//! BOM
//-> Das Browser Object Model ist eine Schnittstelle, die vom Browser bereit gestellt wird und es JS/TS ermoglicht, mit dem Browserfenster/ Browserdaten zu interagieren.
//-> ueber das window-Object
console.log(window);

//# window.screen = Eigenschaften des verwendeten Bildschirms
console.log("Aktuelle Bildschirmhoehe in px:", window.screen.availHeight);
console.log("Aktuelle Bildschirmbreite in px:", window.screen.availWidth);

//=> ====== Browserfenster selbst ========
//# verfuegbare Hoehe/ Breite des aktuellen Browserfensters
console.log("Innere Hoehe des Browserfensters:", window.innerHeight);
console.log("Innere Breite des Browserfensters:", window.innerWidth);

//-> Event: resize = wenn sich die Groesse des Fensters aendert
window.addEventListener("resize", () => {
  console.log("Fenstergroesse wurde geandert");
  console.log(`aktulle Groesse ${window.innerWidth} x ${window.innerHeight}`);
});

//# window.location - Informationen zu der aktuellen URL
console.log("Gesamte URL:", window.location.href);
console.log("Port:", window.location.port);

//# window.history - Verlauf der Aufrufe
console.log("Laenge der History:", window.history.length);

//-> selber navigieren
document.getElementById("back-btn")?.addEventListener("click", () => {
  window.history.back();
});

document.getElementById("forward-btn")?.addEventListener("click", () => {
  window.history.forward();
});

//-> Seite neu laden lassen
document.getElementById("reload-btn")?.addEventListener("click", () => {
  window.location.reload();
});

//-> umleiten / oeffnen
document.getElementById("open-btn")?.addEventListener("click", () => {
  window.open("https://catfact.ninja/");
});
// https://www.w3schools.com/TAGs/att_a_target.asp

//# window.navigator
console.log("Browserinfo:", window.navigator.userAgent);

if (window.navigator.userAgent.includes("Chrome")) {
  console.log("Beste Browser Wahl");
} else {
  console.log("Brother ewwww");
}

//# welche Browsersprache
console.log("AKtuelle Sprache des Browsers:", window.navigator.language);

//# ist der Browser online
//boolean
console.log("Online??:", window.navigator.onLine);

//=> es gibt natuierlich noch eiiiiiniges mehr
//=> https://developer.mozilla.org/en-US/docs/Web/API/Window?retiredLocale=de

//# Dialoge
// window.alert("Achtung");
// window.prompt("Wie alt bist du?");
// window.confirm("Bitte betaetige die Datenschutzrichtlinien");
