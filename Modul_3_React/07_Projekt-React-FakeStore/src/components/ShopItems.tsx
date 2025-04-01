import { ShopProducts } from "../App";
import "./ShopItems.css";

type ShopItemsProps = {
  shopProducts: ShopProducts[]; // Korrekt: Ein Array von ShopProducts
};

export default function ShopItems({ shopProducts }: ShopItemsProps) {
  return (
    <div className="productscontainer">
      {shopProducts.map((product) => (
        <div key={product.id} className="product">
          <div className="productimgcontainer">
            <img
              className="productimg"
              src={product.image}
              alt={product.title}
              width={100}
            />
          </div>
          <h3 className="producttitle">{product.title}</h3>
          <p className="productprice">{product.price} €</p>
          <p className="productdescription">{product.description}</p>
          <p className="showmore">Show More</p>
        </div>
      ))}
    </div>
  );
}
