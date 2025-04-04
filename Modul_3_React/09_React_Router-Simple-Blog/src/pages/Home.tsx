import { NavLink } from 'react-router-dom';
import headimg from '../assets/img/header.png';
import './Home.css';
export default function Home() {
  return (
    <div className="home-container">
      <div
        className="header"
        style={{ backgroundImage: `url(${headimg})` }}
      ></div>
      <div className="home">
        <h2>Welcome to my simple Blog</h2>
        <NavLink to="/blog">
          <button>Go to articles</button>
        </NavLink>
      </div>
    </div>
  );
}
