import { Bird } from '@/types';
import { Link } from 'react-router-dom';

type BirdCardProps = {
  bird: Bird;
};

export default function BirdCard({ bird }: BirdCardProps) {
  // latin name im datensatz sieht z.B. so aus: "Turdus merula"
  // die API braucht aber dieses format: "turdus_merula"
  const formattedLatinName = bird.latinName.replace(' ', '_').toLowerCase();

  return (
    <li>
      <Link to={`/birds/${formattedLatinName}`}>
        <img src={bird.imageUrl} alt="" />
        <h3>{bird.name}</h3>
        <p>{bird.description}</p>
      </Link>
      <audio controls src={bird.songUrl}></audio>
    </li>
  );
}
