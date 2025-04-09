// src/components/ThemeSwitcher.tsx
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext'; // Zugriff auf Theme-Kontext

// Komponente für den Button zum Theme-Wechsel
const ThemeSwitcher = () => {
  // Zugriff auf aktuellen Theme-Wert und Umschaltfunktion aus dem Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme} // Klick ruft die Funktion zum Wechseln des Themes auf
      style={{
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '8px',
        marginTop: '1rem',
      }}
    >
      Switch theme (current: {theme.toUpperCase()})
    </button>
    // Anzeige des aktuellen Themes im Button ^^^^
  );
};

export default ThemeSwitcher;
