// Link-Komponente für Navigation importieren
import { Link } from 'react-router-dom';

// Bilder importieren
import allbeer from '../assets/img/allbeer.jpeg';
import randombeer from '../assets/img/randombeer.jpeg';

// CSS-Datei importieren
import './Home.css';

// Startseite mit zwei Karten-Links
const Home = () => {
  return (
    <div className="home-page">
      {/* Link zur "Alle Biere"-Seite */}
      <Link to="/beers">
        <div>
          <img src={allbeer} alt="All Beers" />
        </div>
        <div>
          <h2>All Beers</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
            eleifend vitae varius venenatis.
          </p>
        </div>
      </Link>

      {/* Link zur "Zufälliges Bier"-Seite */}
      <Link to="/random-beer">
        <div>
          <img src={randombeer} alt="Random Beer" />
        </div>

        <div>
          <h2>Random Beer</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
            eleifend vitae varius venenatis.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
