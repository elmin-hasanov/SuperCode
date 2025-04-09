// React Hooks und Router importieren
import { useEffect, useState } from 'react';

// Beer-Typ definieren (für TypeScript)
import { Beer } from '../types/Beer';

// Link-Komponente für Navigation importieren
import { Link } from 'react-router-dom';

// Navbar-Komponente importieren
import Navbar from '../components/Navbar';

//  Bilder importieren
import backIcon from '../assets/img/Back.svg';

// CSS-Datei importieren
import './RandomBeer.css';

// Zufälliges Bier anzeigen
const RandomBeer = () => {
  // State für das zufällige Bier
  const [beer, setBeer] = useState<Beer | null>(null);

  // Beim ersten Laden ein zufälliges Bier holen
  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => res.json())
      .then((data) => setBeer(data));
  }, []);

  // Ladeanzeige, falls 🍺 Bier noch nicht da ist
  if (!beer)
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="beer-detail">
      <img className="beer-image" src={beer.image_url} alt={beer.name} />

      <h1>{beer.name}</h1>

      <p>{beer.tagline}</p>

      <p>First brewed: {beer.first_brewed}</p>

      <p>Attenuation level: {beer.attenuation_level}</p>

      <p>{beer.description}</p>

      <p>Created by: {beer.contributed_by.slice(0, 10)}</p>

      <Link to="/beers">
        <img src={backIcon} alt="Back" />
      </Link>

      {/* Navigationsleiste Unten*/}
      <Navbar />
    </div>
  );
};

export default RandomBeer;
