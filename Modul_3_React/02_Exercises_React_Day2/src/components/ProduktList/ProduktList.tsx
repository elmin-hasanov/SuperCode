import ProduktItem from "../ProduktItem/ProduktItem";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.avif";
import img3 from "../../assets/img/3.webp";
import './ProduktList.css';

type Produkt = {
    images: string,
    name: string,
    price: number
}

const produkte: Produkt[] = [
    {
        images: img1,
        name: "Produkt 1",
        price: 10,
    },
    {
        images: img2,
        name: "Produkt 2",
        price: 20,
    },
    {
        images: img3,
        name: "Produkt 3",
        price: 30,
    }
]

const ProduktList = () => {
    return ( 
        <div className='produktlist'>
            {produkte.map((artikel) => <ProduktItem
            images={artikel.images}
            name={artikel.name}
            price={artikel.price}
            />)}
        </div>
     );
}
 
export default ProduktList