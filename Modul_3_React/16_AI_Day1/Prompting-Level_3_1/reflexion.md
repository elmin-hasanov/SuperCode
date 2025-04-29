# 🧾 Aufgabenbeschreibung

🏁 **Lernziel:** Nach dieser Übung kannst du die Rolle der KI gezielt steuern, Prompts iterativ verbessern und eine React-Komponente mit Props und State in einer modernen Vite-App umsetzen – inklusive gestalterischer Vorgaben

Nutze einen KI-basierte Chat-Assistenten deiner Wahl, z. B. [ChatGPT](https://chatgpt.com/), [Claude](https://claude.ai/), [DeepSeek](https://chat.deepseek.com/) …

### Ausgangssituation:

Du möchtest eine React-Komponente für eine Produktdetailseite erstellen lassen. Sie soll modern, übersichtlich, barrierearm und optisch ansprechend gestaltet sein. Außerdem soll sie Props und State verwenden.

**Aufgabe:**

- Starte mit einem einfachen Prompt:
  > Erstelle eine Produktdetailseite mit React und TypeScript.
- Übernimm den generierten Code in eine neue Datei (zum Beispiel ProductDetail.tsx) im Ordner „vorher“.
- Teste ihn in der Vite-App.

- Verbessere deinen Prompt schrittweise, sodass du:
  - der KI eine Rolle gibst:
    > Du bist ein:e erfahrene:r React-Entwickler:in …
  - ein klares Ziel formulierst:
    > Erstelle eine moderne, barrierearme Produktdetailseite mit Titel, Bild, Preis, Beschreibung und Kaufen-Button.
  - eine klare Struktur vorgibst:
    > Nutze Props für die Produktdaten, und verwende State für das Kaufen-Handling (zum Beispiel „In den Warenkorb legen“).
  - eine Design-Vorgabe definierst:
    > Verwende ein Farbschema in Türkis (#40E0D0), Rosa (#FF6F91) und Gelb (#FFD93D).
  - das gewünschte Ausgabeformat festlegst:
    > Gib mir nur JSX-Code in TypeScript, ohne zusätzliche Erklärungen.
  - Bitte die KI anschließend um ein kurzes Selbst-Review:
    > Was kann man an diesem Code noch verbessern?
  - Drehe nochmal 1-3 Feedback-Schleifen
- Lass dir eine überarbeitete Version auf Basis des Feedbacks generieren und übernimm diese in den Ordner „nachher“.

# ✍️ Prompts

## ✍️ Mein Prompt 1

Erstelle eine Produktdetailseite mit React und TypeScript.

## ✍️ Mein Prompt 2

Du bist ein:e erfahrene:r React-Entwickler:in. Erstelle eine moderne, barrierearme Produktdetailseite mit Titel, Bild, Preis, Beschreibung und Kaufen-Button. Nutze Props für die Produktdaten, und verwende State für das Kaufen-Handling (z. B. "In den Warenkorb legen"). Gib mir nur JSX-Code in TypeScript, ohne Erklärungen.

## ✍️ Mein Prompt 3

Gleicher Prompt wie oben, aber mit Design-Vorgabe: Verwende ein Farbschema in Türkis (#40E0D0), Rosa (#FF6F91) und Gelb (#FFD93D).

## 🧠 Was hat gut funktioniert?

- Die KI hat schnell einen funktionierenden JSX-Code geliefert.
- Props wurden direkt sinnvoll eingesetzt.
- Die Gestaltung mit dem Farbschema konnte einfach umgesetzt werden.
- Die Feedback-Schleifen haben kleine, aber sinnvolle Verbesserungen gebracht.

## 🧠 Was war schwierig oder musste verbessert werden?

- Das erste Styling war zu schlicht – Farben wurden nur teilweise verwendet.
- Der State für den Kaufen-Button war zu einfach (z. B. kein "already added"-Zustand).
- Es war nötig, explizit barrierearme Gestaltung zu erwähnen (z. B. `aria-labels`).

## 🧠 Props und State – wie gut konntest du sie anwenden?

- Die Props für Titel, Bild, Preis und Beschreibung wurden korrekt übergeben.
- State wurde verwendet, um den Button-Zustand zu ändern ("in den Warenkorb gelegt").

## 🧠 Optik und Design – wurde das Farbschema umgesetzt?

- Ja, nach gezielter Angabe der Farben wurde das Farbschema umgesetzt.
- Die Farben waren anfangs nicht ideal verteilt – mit Feedback wurde es besser.
