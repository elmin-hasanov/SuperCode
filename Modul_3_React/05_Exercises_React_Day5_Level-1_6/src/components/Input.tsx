import { useState } from "react";
import "./Input.css";

export default function Input() {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  return (
    <div className="input">
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="text"
        value={inputSurname}
        onChange={(e) => setInputSurname(e.target.value)}
      />
      <input
        type="text"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <p>Name: {inputName}</p>
      <p>Surname: {inputSurname}</p>
      <p>Ausgabe: {inputEmail}</p>
    </div>
  );
}
