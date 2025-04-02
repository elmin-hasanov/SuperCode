import './Footer.css';
import { Link } from 'react-router-dom';
import footerimg from '../assets/img/Footer.png';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerimg})` }}>
      <div>
        <div className="line"></div>
        <div className="footer-container">
          <Link to="/" className="logo-container">
            <img src="/src/assets/img/Logo.png" alt="logo" />
            <h1>Woodies</h1>
          </Link>
          <p>(012) 8967453</p>
          <p>woodies@gmail.com</p>
          <p>Jakarta, Indonesia</p>
        </div>
      </div>
      <div className="copyright">
        <p>© 2025 WOODIES made whith React by Elmin Hasanov</p>
      </div>
    </footer>
  );
}
