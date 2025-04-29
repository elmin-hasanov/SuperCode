# 🧾 Aufgabenbeschreibung

🏁 **Lernziel:** Nach dieser Übung kannst du die KI gezielt einsetzen, um Fehler im Code zu erkennen, zu erklären und zu beheben.

Nutze einen KI-basierte Chat-Assistenten deiner Wahl, z. B. [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/), [DeepSeek](https://chat.deepseek.com/) …

## ✍️ Mein Prompt 1

Meine Seite hängt sich auf und ich weiß nicht warum. Hier ist mein React-Code:

import { useState, useEffect } from "react";

const ProductList = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
const fetchData = async () => {
const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();
setProducts(data);
};
fetchData();
}, [products]);

return (

<ul>
{products.map((product) => (
<li key={product.id}>{product.title}</li>
))}
</ul>
);
};

## ✍️ Mein Prompt 2

Ich glaube, der Fehler hängt mit useEffect zusammen. Kannst du bitte erklären, warum dieser Code meine Seite einfrieren lässt?

## ✍️ Mein Prompt 3

Der Effekt wird durch useEffect mit [products] als Abhängigkeit immer wieder ausgelöst. Kannst du den Fehler erklären und mir eine saubere, funktionierende Lösung inklusive Begründung liefern?

Endversion des Codes („nachher“):

tsx
Kopieren
Bearbeiten
import { useState, useEffect } from "react";

const ProductList = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
const fetchData = async () => {
const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();
setProducts(data);
};
fetchData();
}, []); // nur einmal beim Initialisieren

return (

<ul>
{products.map((product) => (
<li key={product.id}>{product.title}</li>
))}
</ul>
);
};

🧠 Reflexion
🧠 Was hat gut funktioniert?
Die KI hat den Fehler korrekt erkannt, bereits beim ersten Prompt.

Schon im ersten Schritt wurde auf die Endlosschleife durch die useEffect-Abhängigkeit products hingewiesen.

Die Erklärung zum unendlichen Re-Render war verständlich und klar.

Die Korrektur durch Nutzung eines leeren Abhängigkeitsarrays [] war sofort funktionstüchtig.

🧠 Was war schwierig oder musste verbessert werden?
Der erste Prompt war zu allgemein. Die KI musste raten, woran es liegt.

Erst durch den zweiten Prompt wurde der Fokus auf useEffect gelenkt.

Mit dem dritten Prompt wurde die KI angeleitet, auch eine Begründung und eine saubere Lösung zu liefern.

Für Anfänger:innen ist die Begrifflichkeit „unendlicher Render-Loop“ eventuell erklärungsbedürftig – da wäre ein Vergleich oder eine visuelle Hilfe (z. B. „Kreis, der sich immer weiter dreht“) hilfreich gewesen.
