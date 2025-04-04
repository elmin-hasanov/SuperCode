import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Runter scrollen -> verstecken
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      }
      // Hoch scrollen -> wieder anzeigen
      else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${showNavbar ? 'navbar--visible' : 'navbar--hidden'}`}
    >
      <h1>My Life</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}
