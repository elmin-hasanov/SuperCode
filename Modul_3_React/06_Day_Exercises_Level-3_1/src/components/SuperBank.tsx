import { CreditCard } from "react-kawaii";
import "./SuperBank.css";
import { useState } from "react";

const mood = [
  "sad",
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko",
];

export default function SuperBank() {
  const [mood, setMood] = useState("happy");

  return (
    <div className="superbank">
      <div className="mood">
        <CreditCard size={240} mood="blissful" color="#A6E191" />
      </div>
      <div>
        <h1>SUPER BANK</h1>
      </div>
      <div>
        <p>Your Bank Account</p>
        <h2 className="balance">$0</h2>
        <input type="text" />
        <div>
          <button onClick={}>Deposit</button>
          <button onClick={}>Pay Out</button>
        </div>
      </div>
    </div>
  );
}
