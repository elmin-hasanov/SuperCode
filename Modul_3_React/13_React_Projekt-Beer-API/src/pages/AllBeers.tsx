// React Hooks und Router importieren
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// CSS-Datei importieren
import './AllBears.css';

// Beer-Typ definieren (für TypeScript)
import { Beer } from '../types/Beer';

// Navbar-Komponente importieren
import Navbar from '../components/Navbar';

// Seite zeigt alle Biere aus der API
const AllBeers = () => {
  // State für Bierliste
  const [beers, setBeers] = useState<Beer[]>([]);

  // Daten beim ersten Render laden
  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);

  // Ladeanzeige, falls 🍺 Bier noch nicht da ist
  if (!beers.length)
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="beers-list">
      {/* alle Biere anzeigen */}
      {beers.map((beer) => (
        <div key={beer._id} className="beer-card">
          <div>
            <img src={beer.image_url} alt={beer.name} />
          </div>

          <div className="beer-info">
            <div className="beer-name">
              <h3>{beer.name}</h3>
            </div>
            <div>
              <p>{beer.tagline}</p>
            </div>
            <div>
              <p>Created by: {beer.contributed_by.slice(0, 10)}</p>
            </div>
            <div>
              <Link to={`/beers/${beer._id}`}>
                <button>Details</button>
              </Link>
            </div>
            {/* Link zur Detailseite */}
          </div>
        </div>
      ))}

      {/* Navigationsleiste unten */}
      <Navbar />
    </div>
  );
};

export default AllBeers;
