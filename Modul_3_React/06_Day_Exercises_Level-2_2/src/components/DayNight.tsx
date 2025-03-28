import { useState } from "react";
import "./DayNight.css";
export default function DayNight() {
  const [day, setDay] = useState(true);

  if (day) {
    return (
      <div className="Day">
        <h1>Day</h1>
        <button onClick={() => setDay(false)}>Change to Night</button>
      </div>
    );
  } else {
    return (
      <div className="Night">
        <h1>Night</h1>
        <button onClick={() => setDay(true)}>Change to Day</button>
      </div>
    );
  }
}
