import ThemeSwitcher from '../components/ThemeSwitcher'; // Button-Komponente

export default function Home() {
  return (
    <div>
      <main style={{ padding: '2rem' }}>
        <ThemeSwitcher /> {/* Button zum Umschalten des Themes */}
        <h1>React Context und ThemeProvider</h1>
        <h2>
          Übung zum Thema Context und ThemeProvider zusätzlich noch Router zum
          wiederholen
        </h2>
        <p>Diese Seite wechselt zwischen Light, Dark und Blue Theme.</p>
      </main>
    </div>
  );
}
