import { describe, test, expect } from "vitest";
import { checkPalindrome } from "./checkPalindrome";


// # ✅Aufgabenstellung

// 🏁Lernziel:  Nach dieser Übung kannst du testgetrieben (TDD) eine Funktion entwickeln

// Bevor du loslegt: Gehe anhand des Skripts alle Schritte durch, damit du in deinem Projekt Unit Tests schreiben und ausführen kannst

// - Es soll eine Funktion checkPalindrome entstehen
// **Beschreibung**: Schreibe eine Funktion, die überprüft, ob ein gegebener String ein Palindrom ist (d.h., ein String, der vorwärts und rückwärts gleich ist, wie "radar" oder "level"). Ignoriere Leerzeichen, Sonderzeichen und Groß-/Kleinschreibung.
// - Lege die Methode checkPalidrome leer an
// - Lege eine Test-Datei an
// - Schreibe einen Test nach dem anderen und passe dann den Code an, so dass der Code in der Funktion Stück für Stück entsteht
// - Achte darauf, dass der Test immer erst fehlschlägt, dann zum Laufen gebracht wird (TDD Zyklus)
// - Schreibe so viele Unit Tests wie nötig, damit alle Testfälle abgedeckt sind

// # ☝🏼 Hinweis

// - Benutze sinnvolle und sprechende Testnamen
// - Achte darauf, dass die Tests voneinander unabhängig sind und nur eine Sache testen
// - Gehe in den kleinstmöglichen Schritten (Baby Steps) vor

describe("checkPalindrome", ()=>{
    test("'Hallo' should return false",()=>{
        expect(checkPalindrome('Hallo')).toBe(false)
    })
    test("'radar' should return true",()=>{
        expect(checkPalindrome('radar')).toBe(true)
    })
    test("'Level' should return true",()=>{
        expect(checkPalindrome('Level')).toBe(true)
    })
    test("'Do geese see God?' should return true (handling of spaces and special characters)",()=>{
        expect(checkPalindrome('Do geese see God?')).toBe(true)
    })
})