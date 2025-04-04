import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Super Car List</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
