import { useParams } from 'react-router-dom';
import cars from '../data.json';

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((car) => car.id === Number(id));

  if (!car) {
    return <h2>Wird Geladen</h2>;
  }

  return (
    <div className="car-detail">
      <h1>
        {car.CarMake} {car.carModel}
      </h1>
      <p>Baujahr: {car.CarYear}</p>
      <a href="/">Zurück zur Liste</a>
    </div>
  );
};

export default CarDetail;
