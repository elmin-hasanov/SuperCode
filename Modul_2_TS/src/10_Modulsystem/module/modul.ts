//! ==== modularer Code ======
//- Code wird auf mehrere Module (= Dateien) aufgeteilt
//- der Code kann zwischen den Modulen geteilt werden
//- wird in allen groesseren Projeken eingesetzt

//=> Vorteile
//=> Wiederverwendbarkeit
//=> Uebersichtlichkeit / bessere Lesbarkeit/ Klarheit / Struktur
//=> bessere Wartbarkeit
//=> Zusammenarbeit in Teams -> meinsten Frameworks funktionieren so
//=> Testbarkeit
//=> bessere Performance

//! import / export
//- in TS verwenden wir die sog. ES-Module Syntax
//// fueher: CommonJS -> Modulsystem fuer Node.js
//// const importedModule = require("./test/example.ts")

//- export
//- kann Variablen, FN, Enums, Interfaces, Klassen, Types aus einer Datei exportieren

//- import
//- kann Variablen, FN, Enums, Interfaces, Klassen, Types aus einer Datei importieren

//- Einstellungen zu Modules:
//-> in der tsconfig.json
//-> "ESNext" eintragen bei "module"

//# ==== die versch. Moegl., um Elemnte zu expt. und imp. ======
//=> alles aus einem Modul (einer Datei) importieren
// import "./style.css"

//=> Named Export und Import (=benannt)
import { DISCOUNT, cacluatePrice, nochIrgendeineVar } from "./customer";
import { Customer } from "./models/types";

console.log(cacluatePrice(199));

console.log(DISCOUNT);

const custimer567: Customer = {
  id: 432789,
  name: "Mona",
  address: {
    street: "Hauptstr.1",
    postalCode: "D-98765",
    city: "iwo im  Sueden",
  },
};

//=> Import mit Alias (= umbenannter import)
//? Schluesswort "as"

import { cacluatePrice as cacluatePricePrizza } from "./customer";

console.log(cacluatePricePrizza(234));

//=> Export mit Alias
import { printOddNumbers } from "./legacy-code";

//=> default export und import (= Standardelement)
//? der Vorteil ist, ich muss beim import keine geschweiften Klammern verwenden
import CustomerStatus from "./models/customerSatus";

//? UND
//? oder ich koennte sogar direkt einen eigenen Namen vergen (ohne "as" zu verwenden)

import CustomerStatusWithABetterName from "./models/customerSatus";

console.log(CustomerStatusWithABetterName);

//=> alles aus einem Modul importieren

import * as CustomerThings from "./customer.ts";

console.log(CustomerThings.nochIrgendeineVar);

console.log(CustomerThings.cacluatePrice(456));

//# --- 2 Arten von Imports -----
//=> realtive
//-> eigene Dateien innherlab meines Projekts
//-> beginnen immer mit ./ oder ../

//=> non-relative
//-> externe Module oder Bilbliotheken
//-> liegen in node_modules
//->  beginnen NICHT mit ./ oder ../

import { format as formatiereDasDatumDuFunktionDu } from "date-fns";

const today = new Date();

console.log(today);

console.log(
  formatiereDasDatumDuFunktionDu(today, "MMMM do 'im Jahre des Herrn' yyyy")
);

//-> wenn du externe Bibliotheken installierst, kann es auch vorkommen, dass diese in JS geschrieben sind
//-> sprich sie haben keine TS-Definitionen
//-> wir bekommen einen Compilerfehler / Import schlaegt fehl
import * as lodashPizza from "lodash";

//! um den Fehler zu beheben muessen wir Typedefinitionen fuer das Paket nachinstallieren
//- du kannst immer probieren die Types nachzuinstallieren mit:
//# npm i @types/[Paketnamen]
