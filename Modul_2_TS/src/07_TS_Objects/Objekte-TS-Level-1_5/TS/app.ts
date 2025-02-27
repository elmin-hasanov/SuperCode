type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

const unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

// Auf oberste Schublade zugreifen und Ordner2 ausgeben
console.log(unserLager.schrank["Obere Schublade"].Ordner2);

// Auf untere Schublade zugreifen und Cola ausgeben
console.log(unserLager.schrank["Untere Schublade"]);

// Auf Schublade im Schreibtisch zug
console.log(unserLager.schreibtisch.schublade);


// in die schublade was hinzu fuegen
unserLager.schreibtisch.schublade = "Stifte";
console.log(unserLager.schreibtisch.schublade);

// in die obere Schublade was hinzu fuegen
unserLager.schrank["Obere Schublade"].Ordner1 = "Rechnungen";
console.log(unserLager.schrank["Obere Schublade"].Ordner1);

// in die untere Schublade was hinzu fuegen
unserLager.schrank["Untere Schublade"] = "Fanta";
console.log(unserLager.schrank["Untere Schublade"]);