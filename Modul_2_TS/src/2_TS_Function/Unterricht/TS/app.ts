//# Functions
//- Functions sind grundlegende Bausteine in JS/TS und in vielen anderen Programmiersprachen. Sie sind eigenstaendige Codeblöcke, die best. Aufgaben ausführen. Sie können wiederverwendet werden, um den Code modularer und wartbarer zu gestalten

//$ 1. Deklarieren
// Wir erstellen die Funktion und beschreiben, was die Funktion machen soll
// mit dem Keyword "function" sagen wir TS, dass jetzt eine Funktion kommt
// "sayHi" ist der Name der Funktion, der ist frei wählbar, sollte aber sinnig sein
// () muss immer da sein
function sayHi() {
    console.log("Hallo Jule");
  }
  
  //$ 2. Aufrufen
  // Wir müssen eine Funktion aufrufen, damit sie ausgeführt wird
  // Wenn wir den Aufruf einfach in unsere TS Datei schreiben, wird die Funktion beim Aufruf der Seite ausgeführt
  // Später können wir Funktionen ausführen lassen, wenn beispielsweise auf einen Button geklickt wird
  sayHi();
  // sayHi();
  // sayHi();
  // sayHi();
  
  //# Functions mit Parametern = Platzhalter
  // ? Ein Parameter
  // ? Mit Parametern können wir unsere Funktionen viel flexibler und wiederverwendbar machen
  // ? dient als Platzhalter für die Werte, die bei einem Funktionsaufruf übergeben werden.
  
  //$ 1. Deklarieren
  // In den Klammern schreiben wir den Parameter und reichen ihn an die Funktion weiter
  // firstName ist quasi unser Platzhalter
  
  function sayHello(firstName: string) {
    console.log(`Hallo ${firstName}`);
    //   console.log("Hallo ", firstName)
  }
  
  //$ 2. Aufrufen
  // Argumente: Tatsächliche Werte, die beim Aufruf der Funktion übergeben werden und die Parameter ersetzen.
  
  sayHello("Hao"); // "Hao" ist das Argument
  sayHello("Mina"); // "Mina" ist das Argument
  sayHello("Elimin"); // "Elmin" ist das Argument
  
  const name = "Max";
  sayHello(name); // name (in name ist der Wert "Max" gespeichert) ist das Argument
  
  function addMe(zahl1: number, zahl2: number) {
    console.log(zahl1 + zahl2);
  }
  
  addMe(40, 30);
  addMe(9, 67);
  // addMe("5", "4"); // Das Argument vom Typ "string" kann dem Parameter vom Typ "number" nicht zugewiesen werden.
  
  //# Funktionen mit Rückgabewert
  //-> die Funktion gibt einen Wert zurück
  
  function addTwenty(inputNumber: number) {
    //   console.log(inputNumber + 20);
    return inputNumber + 20;
  }
  
  let newNumber = addTwenty(5);
  console.log(newNumber);
  
  function mixer(zutat1: string, zutat2: string) {
    let smoothie = `Hmmm ein leckerer ${zutat2}-${zutat1} Smoothie - Bitteschoen!!`;
    return smoothie;
  
    // return  `Hmmm ein leckerer ${zutat1}-${zutat2} Smoothie - Bitteschoen!!`
  }
  
  let meinSmoothie = mixer("Banane", "Erdbeere");
  console.log(meinSmoothie);
  
  //# optionale Parameter => mit "?"
  //-> Beim Aufruf einer Funktion müssen wir alle vorgegeben Parameter mitgeben.
  // function greetUser(firstName: string, lastName: string) {
  //   console.log(`Hello ${firstName} ${lastName}`);
  // }
  
  //greetUser("Marco") // 2 Argumente wurden erwartet, empfangen wurden aber 1.
  
  //-> ein Parameter wird optional indem wir ein "?" hinter ihn schreiben
  function greetUser(firstName: string, lastName?: string) {
    if (lastName) {
      console.log(`Hello ${firstName} ${lastName}`);
    } else {
      console.log(`Hello ${firstName}`);
    }
  }
  
  greetUser("Marco");
  greetUser("Marco", "Orlandi");
  
  //# Default Parameter
  // -> Voreinstellung oder Standardwert
  // -> wenn kein Wert vergeben wird -> dann nimmt es den default Wert an
  
  function orderFood(meal: string, quantity: number = 1) {
    const orderConfirmation = `Successfully ordered ${meal} ${quantity} times`;
    console.log(orderConfirmation);
  }
  
  orderFood("Pizza Funghi", 10);
  orderFood("Pizza Tonno");
  
  //# Gültigkeitsbereich von Variablen = Scope
  //-> gloable vs lokale Variablen
  //! Generell gilt: Lege eine Variable erst an der Stelle an, wo du sie wirklich brauchst
  
  //$ Globale Variable
  //$ werden ausserhalb von Funktionen und Codebloecken definiert (außerhalb von {} )
  //$ sind ÜBERALL sichtbar
  
  //$ Lokale Variable
  //$ werden innerhalb von Funktionen, Schleifen, if-Anweisungen, etc. definiert (innherhalb von {})
  //$ => sind NUR INNERHALB ihres Codeblocks (innherhalb der {} ) gültig
  
  const globaleVariablePizza = "Marzio";
  
  function printName() {
    const lokaleVaribalePizza = "Costantini";
    console.log(`Hallo ${globaleVariablePizza} ${lokaleVaribalePizza}`);
  }
  
  printName();
  
  // console.log(lokaleVariable); // diese Variable gibt es hier NICHT
  
  function printName2() {
    const lokaleVarDoener = "Costantini";
    console.log(`Hallo ${globaleVariablePizza} ${lokaleVarDoener}`);
  
    if (globaleVariablePizza === "Marzio") {
      const nochEineLokaleVar = "ist 'n dufter Typ";
      console.log(`${globaleVariablePizza} ${nochEineLokaleVar}`);
    } else {
      console.log(` Hallo ${globaleVariablePizza} ${lokaleVarDoener}} `);
    }
  }
  
  //# Bennenung von Funktionen
  //-> beginnen mit einem Kleinbuchstabem
  //-> camelCase
  //-> Verb + Objekt (+ weitere Kriterien)
  //funtion caculateAge()
  //-> Abkuerzungen vermeiden
  // function crtTemF() {}
  // function createTemporaryFile() {}
  //-> Einzahl/Mehrzahl (validateEmail / validateEmails)
  //-> get und set benutzen => falls ein Wert geholt oder gesetzt wird
  // function getUserData() {}
  // function setShoppingCart() {}