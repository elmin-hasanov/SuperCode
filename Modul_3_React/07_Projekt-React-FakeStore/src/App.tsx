import { useEffect, useState } from "react";
import ShopItems from "./components/ShopItems";
import "./App.css";
import Nav from "./components/Nav";

export type ShopProducts = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

function App() {
  console.log("RERENDERING NOW!");
  const [shopProducts, setShopProducts] = useState<ShopProducts[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setShopProducts(data);
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
      <Nav />
      <div className="shopcontainer">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <ShopItems shopProducts={shopProducts} />
        )}
      </div>
    </div>
  );
}

export default App;
