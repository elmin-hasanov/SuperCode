import { createContext, useState, ReactNode, useEffect } from 'react';

// Wir definieren die möglichen Themes als TypeScript-Typ
export type Theme = 'light' | 'dark' | 'blue';

// Struktur des Contexts mit aktuellem Theme und Funktion zum Wechseln
interface ThemeContextType {
  theme: Theme; // aktuelles Theme (z. B. "light")
  toggleTheme: () => void; // Funktion, um das Theme zu wechseln
}

// Erstellen des eigentlichen Contexts mit einem Default-Wert
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light', // Standardwert ist "light"
  toggleTheme: () => {}, // leere Funktion als Platzhalter
});

// Unser Provider kümmert sich um die Logik und stellt sie zur Verfügung
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // State, um das aktuell ausgewählte Theme zu speichern
  const [theme, setTheme] = useState<Theme>('light');

  // Liste aller verfügbaren Themes
  const themes: Theme[] = ['light', 'dark', 'blue'];

  // toggleTheme wechselt zum nächsten Theme in der Liste
  const toggleTheme = () => {
    setTheme((prev) => {
      const index = themes.indexOf(prev); // Aktuellen Index finden
      return themes[(index + 1) % themes.length]; // Nächstes Theme (mit Rundlauf)
    });
  };

  // useEffect sorgt dafür, dass das Theme im DOM aktualisiert wird
  useEffect(() => {
    document.body.setAttribute('data-theme', theme); // Setzt z.B. data-theme="dark"
  }, [theme]);

  // Rückgabe des Context-Providers mit den Werten
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* alle Kind-Komponenten erhalten Zugriff auf das Theme */}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
