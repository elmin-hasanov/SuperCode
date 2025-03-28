import { CreditCard } from "react-kawaii";
import "./SuperBank.css";
import { useState } from "react";

export default function SuperBank() {
  const [balance, setBalance] = useState(0);
  const [inputVelue, setInputVelue] = useState(0);

  function handleclick(isaddition: boolean) {
    if (isaddition) {
      setBalance(inputVelue + balance);
    } else {
      setBalance(balance - inputVelue);
    }
  }

  return (
    <div className="superbank">
      <div className="mood">
        <CreditCard
          size={240}
          mood={balance >= 1 ? "happy" : "sad"} // ternary operator
          color="#A6E191"
        />
      </div>

      <div className="content">
        <h1>
          <span>S</span>UPER <span>B</span>ANK
        </h1>

        <p>Your Bank Account</p>
        <h2 className="balance">{balance}$</h2>
        <input
          onChange={(event) => setInputVelue(Number(event.target.value))}
          type="number"
        />
        <div className="buttons">
          <button onClick={() => handleclick(true)}>Deposit</button>
          <button onClick={() => handleclick(false)}>Pay Out</button>
        </div>
      </div>
    </div>
  );
}
