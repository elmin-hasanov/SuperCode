import { Chocolate } from "react-kawaii";
import { useState } from "react";

const moods = [
  "sad",
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko",
];

const color = ["#A6E191", "#F4A261", "#2A9D8F", "#E76F51", "#264653"];

const randomMood = () => {
  return moods[Math.floor(Math.random() * moods.length)];
};

const randomColor = () => {
  return color[Math.floor(Math.random() * color.length)];
};

export default function Kawaii() {
  const [mood, setMood] = useState(randomMood());
  const [bg, setBg] = useState(randomColor);
  return (
    <div className="input">
      <Chocolate size={240} mood={mood} color={bg} />
      <button
        onClick={() => {
          setMood(randomMood());
        }}
      >
        Random Mood
      </button>
      <button
        onClick={() => {
          setBg(randomColor());
        }}
      >
        Random Color
      </button>
    </div>
  );
}
