# 🧾 Aufgabenbeschreibung

✅ Aufgabenstellung  
🏁 Lernziel: Nach dieser Übung kannst du Prompts so formulieren, dass die KI strukturierte Daten im gewünschten Format (z. B. JSON) liefert.  
Nutze einen KI-basierten Chat-Assistenten deiner Wahl, z. B. ChatGPT, Claude, DeepSeek …

**Ausgangsprompt:**  
„Gib mir ein JSON-Objekt für ein Produkt in einem Sneaker-Shop“

**Aufgabe:**  
Gib den Ausgangsprompt ein und analysiere den Output.  
Übernimm das Ergebnis in eine Datei mit dem Namen `produkt.json` im Ordner `"vorher"` und öffne sie in VS Code.  
Formuliere den Prompt schrittweise so um, dass das Ergebnis:

- ein Sneaker-Produkt beschreibt
- die folgenden Felder enthält: Name, Hersteller, Preis, Größen (als Liste), Beschreibung und Verfügbarkeit (als Ja/Nein)
- exakt im JSON-Format ohne Kommentare oder Erklärungen zurückgegeben wird

Teste verschiedene Formulierungen und schau dir die Outputs an.  
Übernimm das optimierte Ergebnis in eine Datei mit dem Namen `produkt.json` im Ordner `"nachher"`.

# ✍️ Prompts

## ✍️ Mein Prompt 1

Gib mir ein JSON-Objekt für ein Produkt in einem Sneaker-Shop.

{
"Name": "Air Runner",
"Hersteller": "SneakerCo",
"Preis": 119.99,
"Größen": [38, 39, 40, 41, 42, 43],
"Beschreibung": "Ein stylischer Sneaker für Alltag und Sport.",
"Verfügbarkeit": "Ja"
}

## ✍️ Mein Prompt 2

Gib mir ein JSON-Objekt, das ein Sneaker-Produkt beschreibt. Es soll die Felder Name, Hersteller, Preis, Größen (als Liste), Beschreibung und Verfügbarkeit (als Ja/Nein) enthalten.

{
"Name": "Air Runner",
"Hersteller": "SneakerCo",
"Preis": 119.99,
"Größen": [38, 39, 40, 41, 42, 43],
"Beschreibung": "Ein stylischer Sneaker für Alltag und Sport.",
"Verfügbarkeit": "Ja"
}

## ✍️ Mein Prompt 3

Gib mir exakt ein JSON-Objekt ohne Kommentare oder Erklärungen. Es beschreibt ein Sneaker-Produkt mit den Feldern: Name, Hersteller, Preis, Größen (als Liste), Beschreibung, Verfügbarkeit (als 'Ja' oder 'Nein').

{
"Name": "StreetFlex 500",
"Hersteller": "UrbanFeet",
"Preis": 99.95,
"Größen": [36, 37, 38, 39, 40, 41, 42],
"Beschreibung": "Leichter und flexibler Sneaker mit atmungsaktivem Obermaterial.",
"Verfügbarkeit": "Nein"
}
