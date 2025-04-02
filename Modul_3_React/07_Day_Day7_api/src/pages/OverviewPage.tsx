import { useEffect, useState } from "react";
import { Skeleton } from "../components/ui/skeleton";
import BirdCard from "../components/BirdCard";
import { Bird } from "@/types";
// import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function OverviewPage() {
  console.log("RENDERING NOW!");
  const [birds, setBirds] = useState<Bird[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const [count, setCount] = useState(0);

  const [selectedBirdSize, setSelectedBirdSize] = useState("");

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
  }, []); // leerer dependency-array => wird nur beim ersten rendern der komponente ausgefuehrt
  if (errorMessage) {
    return "Kaputtttttt";
  }

  let filteredBirds = birds;

  if (selectedBirdSize) {
    filteredBirds = birds.filter((bird) => bird.size === selectedBirdSize);
  }

  return (
    <div>
      {/* <a href="/about">/about</a>
      <Link className="text-green-500" to="/about">/about</Link> */}

      <h1>Unsere Vogelseite</h1>

      <div className="my-4">
        <Select
          value={selectedBirdSize}
          onValueChange={(value) => {
            setSelectedBirdSize(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Bird Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="XS">XS</SelectItem>
            <SelectItem value="S">S</SelectItem>
            <SelectItem value="M">M</SelectItem>
            <SelectItem value="L">L</SelectItem>
            <SelectItem value="XL">XL</SelectItem>
          </SelectContent>
        </Select>
      </div>
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
          {filteredBirds.map((bird) => (
            <BirdCard bird={bird} />
          ))}
        </ul>
      )}
      <p>{errorMessage}</p>
    </div>
  );
}

export default OverviewPage;
