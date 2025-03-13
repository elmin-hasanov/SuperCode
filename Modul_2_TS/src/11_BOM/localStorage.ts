console.log("%c ====== localeStorage & Cookies ======", "color: orange");
//! Cookies
//-> Sitzungsverwaltung
//-> Praeferenzen
//-> Tracking

if (window.navigator.cookieEnabled) {
  console.log("Cookies aktiv");
} else {
  console.log("Cookies blockiert");
}

//so setzte ich einen Cookie
document.cookie = "prefferedLang=de-DE";
document.cookie = "preferredTheme=dark";

//so loesche ich einen cookie (u.a.)
document.cookie =
  "preferredTheme=dark" + "; expires=" + new Date(0).toUTCString();

document.cookie =
  "prefferedLang=de-DE" + "; expires=" + new Date(0).toUTCString();

// const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
// document.cookie = `ichBinIn1Minweg=aaaannndItsGone; expires=${inOneMinute}`;

// so lese ich einen Cookie aus
// const cookies = document.cookie;
// console.log(cookies);

// const cookieArr = cookies.split("; ");
// console.log(cookieArr);

// const preferredThemeValue = cookieArr[1].split("=")[1];
// console.log(preferredThemeValue);

//$ Cookies kannst du nicht beliebig einsetzen. Stelle sicher, dass du den User ueber die Verwendung von Cookies informierst (Cookie-Banner , Pop-Ups)
//$ User sollte die moeglichkeit haben, Cookies abzulehnen oder zu deaktivieren

//! local storage

const languageSettings = { language: "German", subtitles: "English" };

const settingsAsJSONString = JSON.stringify(languageSettings);
// console.log(settingsAsJSONString);

//etwas in localStorage reinschreiben
localStorage.setItem("LanguageSetting", settingsAsJSONString);

//etwas aus localStorage loeschen
//localStorage.removeItem("test");

// etwas aus localStorage herauslesen
const stettingsFromLocalStorage = localStorage.getItem("LanguageSetting");
console.log(stettingsFromLocalStorage);

if (stettingsFromLocalStorage) {
  const realLanguageSettingsObject = JSON.parse(stettingsFromLocalStorage);
  console.log(realLanguageSettingsObject);
}

//! sessionStorage
//-> gleiche Logik wie localStorage
//-> wenn ich nur etwas temporaer speichern moechte
//-> sobald ich den Tab oder den Browser schliesse, ist der Eintrag weg

// const languageSettings2 = { language: "German", subtitles: "English" };

// const settingsAsJSONString2 = JSON.stringify(languageSettings);
// // console.log(settingsAsJSONString);

// //etwas in localStorage reinschreiben
// sessionStorage.setItem("LanguageSetting", settingsAsJSONString);

// //etwas aus localStorage loeschen
// //localStorage.removeItem("test");

// // etwas aus localStorage herauslesen
// const stettingsFromLocalStorage2 = sessionStorage.getItem("LanguageSetting");
// console.log(stettingsFromLocalStorage);

// if (stettingsFromLocalStorage) {
//   const realLanguageSettingsObject = JSON.parse(stettingsFromLocalStorage);
//   console.log(realLanguageSettingsObject);
// }

//# Warenkorb Beispiel

const warenkorb: string[] = [];

function addToCart(product: string) {
  warenkorb.push(product);
  localStorage.setItem("cart", JSON.stringify(warenkorb));
}

addToCart("Pizza");
addToCart("Nasendusche");
addToCart("Orchideen");

function renderCart() {
  const cartFromLocalStorage = localStorage.getItem("cart");
  console.log(cartFromLocalStorage);

  if (cartFromLocalStorage) {
    const cartArray = JSON.parse(cartFromLocalStorage);
    console.log(cartArray);

    //ins HTML ausgeben
    const cartElement = document.createElement("div");
    cartElement.innerText = cartArray.join(", ");
    document.body.appendChild(cartElement);
  }
}

renderCart();
