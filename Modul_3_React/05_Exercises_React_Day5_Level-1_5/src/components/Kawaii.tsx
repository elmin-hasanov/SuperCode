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

export default function Kawaii() {
  const [mood, setMood] = useState("happy");
  const randomMood = () => {
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  };
  const [bg, setBg] = useState("#A6E191");
  const randomColor = () => {
    setBg(color[Math.floor(Math.random() * color.length)]);
  };
  return (
    <div className="input">
      <Chocolate mood={mood} color={bg} />
      <button onClick={randomMood}>Random Color</button>
      <button onClick={randomColor}>Random Color</button>
    </div>
  );
}
