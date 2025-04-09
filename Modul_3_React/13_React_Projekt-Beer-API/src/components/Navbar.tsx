import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <div className="bier-logo"></div>
    </Link>
  </nav>
);

export default Navbar;
