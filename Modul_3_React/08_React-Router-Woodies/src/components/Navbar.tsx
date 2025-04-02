import { Link } from 'react-router-dom';
import './Navbar.css';
import logoimg from '../assets/img/Logo.png';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <Link to="/" className="logo-container">
            <img src={logoimg} alt="logo" />
            <h1>Woodies</h1>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
      </div>
    </>

    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink
    //         to="/"
    //         className={({ isActive }) => (isActive ? 'active' : '')}
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/about"
    //         className={({ isActive }) => (isActive ? 'active' : '')}
    //       >
    //         About
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/Products"
    //         className={({ isActive }) => (isActive ? 'active' : '')}
    //       >
    //         Products
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/jenson"
    //         className={({ isActive }) => (isActive ? 'active' : '')}
    //       >
    //         Jenson
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/deon"
    //         className={({ isActive }) => (isActive ? 'active' : '')}
    //       >
    //         Deon
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/krisha"
    //         className={({ isActive }) => (isActive ? 'active' : '')}
    //       >
    //         Krisha
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
