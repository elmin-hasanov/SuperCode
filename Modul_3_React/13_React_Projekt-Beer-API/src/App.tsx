// Router-Komponenten aus react-router-dom importieren
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Seiten importieren
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import BeerDetail from './pages/BeerDetail';
import RandomBeer from './pages/RandomBeer';

export default function App() {
  return (
    // BrowserRouter stellt den Router-Kontext bereit
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/beers" element={<AllBeers />} />

        {/* Detailansicht für ein einzelnes Bier (per ID in der URL) */}
        <Route path="/beers/:beerId" element={<BeerDetail />} />

        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </BrowserRouter>
  );
}

// Navbar ist hier nicht in App.tsx drin – ich hab sie einfach nur auf den Unterseiten eingebaut.
// Für kleine Projekte reicht das völlig aus. Wenn’s größer wird, kann man z.B. mit useLocation arbeiten,
// um die Navbar zentral zu steuern (z.B. nur anzeigen, wenn man nicht auf der Startseite ist).

// function AppWrapper() {

// Wir holen uns mit useLocation die aktuelle URL-Pfad-Info.

// * const location = useLocation();

// Wenn wir uns NICHT auf der Startseite befinden (also NICHT bei "/"),

// * dann soll die Navbar angezeigt werden.

// const showNavbar = location.pathname !== '/';
