import img1 from "../../assets/img/frikadellen.jpeg";
import img2 from "../../assets/img/glass.jpeg";
import img3 from "../../assets/img/pizza.jpeg";
import img4 from "../../assets/img/pizza2.jpeg";
import img5 from "../../assets/img/salat.jpeg";
import img6 from "../../assets/img/scampi.jpeg";
import img7 from "../../assets/img/spagetthi.jpeg";
import img8 from "../../assets/img/teller.jpeg";
import ShopItems from "../ShopItems/ShopItems";
import "./ShopList.css";
type Menu = {
  img: string;
  title: string;
  description: string;
  price: number;
};

const menulist: Menu[] = [
  {
    img: img1,
    title: "Pizza Peperoni",
    description: "Würzige Peperoni-Salami auf Tomatensauce und Käse",
    price: 9,
  },
  {
    img: img2,
    title: "Pizza Margherita",
    description:
      "Klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum",
    price: 8,
  },
  {
    img: img3,
    title: "Pizza Funghi",
    description: "Leckere Champignons auf Tomatensauce und Käse",
    price: 9,
  },
  {
    img: img4,
    title: "Pizza Quattro Formaggi",
    description:
      "Mit einer Mischung aus vier Käsesorten für den ultimativen Geschmack",
    price: 10,
  },
  {
    img: img5,
    title: "Pizza Prosciutto",
    description: "Belegt mit saftigem Hinterschinken und Mozzarella",
    price: 9,
  },
  {
    img: img6,
    title: "Pizza Tonno",
    description:
      "Mit Thunfisch und roten Zwiebeln auf einer Tomaten-Käse-Basis",
    price: 10,
  },
  {
    img: img7,
    title: "Pizza Vegetariana",
    description:
      "Frisches Gemüse wie Paprika, Zucchini und Oliven auf Tomatensauce",
    price: 9,
  },
  {
    img: img8,
    title: "Pizza Diavola",
    description:
      "Scharfe Salami und Peperoni für Liebhaber von würzigem Geschmack",
    price: 10,
  },
];

const ShopList = () => {
  return (
    <div className="shoplist">
      {menulist.map((a, index) => (
        <ShopItems
          key={index}
          img={a.img}
          title={a.title}
          description={a.description}
          price={a.price}
        />
      ))}
    </div>
  );
};

export default ShopList;
