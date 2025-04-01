import { Bird } from "@/App";

type BirdCardProps = {
  bird: Bird;
};

export default function BirdCard({ bird }: BirdCardProps) {
  return (
    <li>
      <img src={bird.imageUrl} alt="" />
      <h3>{bird.name}</h3>
      <p>{bird.description}</p>
      <audio controls src={bird.songUrl}></audio>
    </li>
  );
}
