import { useEffect, useState } from "react";
import { Skeleton } from "./components/ui/skeleton";
import BirdCard from "./components/BirdCard";

export type Bird = {
  id: string;
  name: string;
  latinName: string;
  description: string;
  food: string[];
  size: "XS" | "S" | "M" | "L" | "XL";
  imageUrl: string;
  songUrl: string;
};

function App() {
  console.log("RERENDERING NOW!");
  const [birds, setBirds] = useState<Bird[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://stfnsr-birdmeister.web.val.run/birds?withDetails=true")
      .then((res) => res.json())
      .then((data) => {
        // setBirds(data)
        setBirds(data);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage("Sorry, there was an error while loading");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (errorMessage) {
    return "Kaputtttttt";
  }

  return (
    <div>
      <h1>Unsere Vogelseite</h1>
      {/* <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {count}
      </button> */}

      {/* {loading ? (
        <Skeleton className=" w-[100px] h-[20px] rounded-full" />
      ) : (
        <ul>
          {birds.map((bird) => (
            <li>{bird.name}</li>
          ))}
        </ul>
      )} */}

      {/* In geschwungenen Klammern{} innerhalb von JSX sind alle Expressions erlaubt — also alles in JS was einen Rückgabewert oder ein Ergebnis hat.
Allerding auch *nur* Expressions. If oder while gehen z.B. nicht*/}
      {loading && <Skeleton className=" w-[100px] h-[20px] rounded-full" />}
      {loading && "Loading"}
      {!loading && (
        <ul className="grid grid-cols-3 gap-4">
          {birds.map((bird) => (
            <BirdCard bird={bird} />
          ))}
        </ul>
      )}
      <p>{errorMessage}</p>
    </div>
  );
}

export default App;
