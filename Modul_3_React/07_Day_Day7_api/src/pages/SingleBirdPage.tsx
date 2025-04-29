import { useParams } from 'react-router';
import type { Bird } from '@/types';
import { useEffect, useState } from 'react';

export default function SingleBirdPage() {
  // hier daten holen fuer spezifischen Vogel
  const { name } = useParams<{ name: string }>();
  console.log(name);

  // * Erinnerung: Wenn state sich ändert, also wenn setBird ausgeführt wird,
  // * wird die Komponente neu ausgeführt/gerendert
  const [bird, setBird] = useState<Bird | null>(null);

  useEffect(() => {
    console.log('HEYYYYYYY');
    fetch(`https://stfnsr-birdmeister.web.val.run/birds/${name}`)
      .then((res) => res.json())
      .then((data) => setBird(data));
  }, []);

  if (!bird) {
    return <p>Loading...</p>;
  }
  // Early Return => Wenn wir diese Zeile erreichen, wissen wir, dass bird vorhanden, also nicht null ist
  // (denn sonst haetten wir gerade schon returned)

  return (
    <div>
      <h1>{bird.name}</h1>
      <p>Latin name: {bird.latinName}</p>

      <img src={bird.imageUrl} alt={bird.name} />
    </div>
  );
}
