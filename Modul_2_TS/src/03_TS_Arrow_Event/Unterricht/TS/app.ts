//# ===== Wiederholung ====
//$ Erkläre den Unterschied zwischen Funktionsdeklaration und Funktionsaufruf.
// Deklaration: Erstellt die FN.
// AUfruf: Fuehrt die FN aus.

//$ Was sind Parameter und Argumente in Funktionen?
// Parameter: Platzhalter fuer Werte
// Argumente: tatsaechlicher Werte (die dann anstelle der Parameter stehen)

//$ Wie gibst du einen Wert aus einer Funktion zurück?
// Schluesselwort return

//$ Was sind optionale Parameter und wie deklarierst du sie?
// Parameter die optional sind
// > deklariert mit einem "?"

//$ Was sind Default-Parameter und wie funktionieren sie?
// Parameter mit einem default/Standard Wert
// werden deklariert mit einem "="

//$ Erkläre den Unterschied zwischen globalen und lokalen Variablen (Scope)
// Globale Variable: ueberall im Code sichtbar / nutzbar (außerhalb von {})
// Lokale Variable: Variablen die nur innherhalb von FN/ Codebloecken sichtbar/ zugeanglich sind (innerhalb von {})

//$ Erstelle eine Funktion namens greetPerson, die eine Person mit ihrem Namen und einer optionalen Nachricht begrüßt.
//$ Wenn eine Nachricht übergeben wird, soll die Funktion "Hallo [Name], [Nachricht]" in der Konsole ausgeben. Wenn keine Nachricht übergeben wird, soll die Funktion "Hallo [Name]" ausgeben.

function greetPerson(name: string, message?: string) {
    console.log(`Hallo ${name} ${message ? "," + message : ""}`);
  }
  
  greetPerson("Oguz");
  greetPerson("Anna", "wie geht's?");
  
  function greetPerson2(name: string, message?: string) {
    if (message) {
      console.log(`Hallo ${name}. ${message}`);
    } else {
      console.log(`Hallo ${name}`);
    }
  }
  
  greetPerson2("Mina", "Voll schoen, dass du da bist, trotz Fieber!!!");
  greetPerson2("Mø");
  
  //$ Schreibe eine Funktion namens isEven, die eine Zahl als Parameter akzeptiert und true zurückgibt, wenn die Zahl gerade ist, und false, wenn sie ungerade ist.
  
  function isEven(zahl: number) {
    if (zahl % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isEven(22));
  
  //# Arrow Functions
  //-> ist einfach eine andere Schreibweise fuer FN (mit einem sog. Fat Arrow =>)
  //-> Die Bestandteile bleiben gleich
  
  //% klassisch
  function printMessage(message: string) {
    console.log(message);
  }
  
  printMessage("Funktionen sind toll!");
  
  //% vs.
  
  //% Arrow FN
  const printMessageArrow = (message: string) => {
    console.log(message);
  };
  
  printMessageArrow("Arrow Functions aber auch");
  
  //-> ====== coole "Features" von Arrow FN =========
  //-> wenn die FN nur aus einer Zeile besteht, kann man die geschweiften Klammern weglassen
  
  const printMessageArrow2 = (message: string) => console.log(message);
  
  //-> bei einer einzeiligen Funktion kann ich sogar das return-Keyword weglassen
  
  //% klassisch
  // function add(a: number, b: number) {
  //     return a + b
  // }
  
  //% Arrow FN
  // const add = (a: number, b: number) => {
  //     return a + b
  // }
  
  //% Arrow FN Kurzschreibweise
  const add = (a: number, b: number) => a + b;
  
  //# EventListener 💕
  
  //$ 1. Element auswählen (Elt. auf das der Event-Listener angewendet werden soll)
  const meineH2 = document.querySelector<HTMLHeadingElement>(".change-color");
  
  //$ 2. Event-Listener hinszufuegen: mit der Methode addEventListener() wird der EL auf das Elt. angehaengt. Diese Methode benoetigt 2  Argumente:
  //% a) Das Ereignis, auf das gewartet werden soll (z.B.: "click")
  //// Beispiuele fuer Ereignisse:
  // Mausklick: click
  // Mausbewegungen: mouseover, mouseout
  // Tastatureingaben: keydown, keyup
  // Formulareingaben: submit, change
  // Seitenladen: load
  
  //% b) Die FN, die ausgefuehrt werden soll, wenn das Ereignis eintritt
  meineH2?.addEventListener("click", changeColor);
  
  function changeColor() {
    if (meineH2) {
      meineH2.style.color = "teal";
    }
  }
  
  meineH2?.addEventListener("mouseout", changeColor2);
  
  function changeColor2() {
    if (meineH2) {
      meineH2.style.color = "orangered";
      meineH2.style.fontSize = "30px";
      meineH2.innerText = "Uhhh Text geandert";
    }
  }
  
  //# dark light mode ☀️ 🌙
  const darkLightSwitch = document.querySelector("img");
  const bodyElement = document.querySelector("body");
  
  darkLightSwitch?.addEventListener("click", toggleDarkLightMode);
  
  function toggleDarkLightMode() {
    if (bodyElement) {
      bodyElement.classList.toggle("dark");
    }
  }
  
  //# Value / Form
  const nameInputForm = document.querySelector("form");
  const userNameInput = document.querySelector<HTMLInputElement>("#name");
  const outputDiv = document.querySelector(".output");
  
  //submmit immer fuer Formulare verwenden
  nameInputForm?.addEventListener("submit", greetUser);
  
  function greetUser(event: Event) {
    event.preventDefault();
  
    let userName;
  
    if (userNameInput) {
      userName = userNameInput.value;
    }
  
    if (outputDiv) {
      outputDiv.innerHTML = `<h3>Hallo ${userName}</h3>`;
    }
  }
  
  //# Register Form
  const registerForm = document.querySelector(".register-form");
  const userName = document.querySelector<HTMLInputElement>("#user-name");
  const userEmail = document.querySelector<HTMLInputElement>("#user-mail");
  const userIcon = document.querySelector<HTMLInputElement>("#user-icon");
  const datenschutzBox = document.querySelector<HTMLInputElement>("#datenschutz");
  
  registerForm?.addEventListener("submit", printUserData);
  
  function printUserData(event: Event) {
    event.preventDefault();
    if (!userName || !userEmail || !userIcon || !datenschutzBox) {
      console.log("Eines oder mehrere Formularelemnte wurden nicht gefunden");
    } else {
      const name = userName.value;
      const eamil = userEmail.value;
      const icon = userIcon.value;
      const datenschutz = datenschutzBox.checked;
  
      if (outputDiv) {
        outputDiv.innerHTML = `
          <h4>Erfolgreich registriert</h4>
          <p>Ihr Benutzername: ${name}</p>
          <p>Ihre E-mail: ${eamil}</p>
          <p>Ihr Icon: ${icon}</p>
          <p>Datenschutzrichtlinien akzeptiert?: ${datenschutz}</p>
          `;
      }
    }
  }