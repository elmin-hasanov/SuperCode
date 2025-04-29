import "./Nav.css";
import { Search } from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">Fake Store</div>

        {/* Navigation */}
        <div className="nav-links">
          <button className="nav-button">Home</button>
          <button className="nav-button">Shop</button>
          <button className="nav-button">Cart</button>
          <button className="nav-button">Checkout</button>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <Search className="search-icon" size={20} />
        </div>
      </div>
    </nav>
  );
}
