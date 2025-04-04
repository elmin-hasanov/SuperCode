import { Link } from 'react-router-dom';
import cars from '../data.json';

const Home = () => {
  return (
    <div className="grid">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <h2>{car.CarMake}</h2>
          <Link to={`/car/${car.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
