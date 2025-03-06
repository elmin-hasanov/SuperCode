import Item from "../item/Item"
import jeasimg from "../../assets/react.svg"
type shopItem = {
    productName: string;
    price: number;
    description: string;
    imgUrl: string;
    stock: number;
  };
  
  const shopItemsArr: shopItem[] = [
    {
      productName: "T-Shirt",
      price: 19.99,
      description: "Baumwoll-T-Shirt in verschiedenen Farben",
      imgUrl:
        "/public/vite.svg",
      stock: 50,
    },
    {
      productName: "Jeans",
      price: 49.99,
      description: "Slim-Fit-Jeans aus Denim",
      imgUrl:
        jeasimg,
      stock: 30,
    },
    {
      productName: "Sneakers",
      price: 79.99,
      description: "Bequeme Sneakers für den Alltag",
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
      stock: 20,
    },
    {
      productName: "Hoodie",
      price: 39.99,
      description: "Warmer Hoodie für kalte Tage",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 40,
    },
    {
      productName: "Jacke",
      price: 99.99,
      description: "Wind- und wasserabweisende Jacke",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg",
      stock: 15,
    },

  ];
const ItemsList = () => {
  return (
    <>
      {/* <Item titlePizza="Pepperoni" PricePizza={10} />
      <Item titlePizza="Margarita" PricePizza={9} />
      <Item titlePizza="Jackfruit" PricePizza={11} /> */}

    {shopItemsArr.map((singleShopItem) => <Item 
    titlePizza={singleShopItem.productName}
    PricePizza={singleShopItem.price}
    imagePizza={singleShopItem.imgUrl}
    stocks={singleShopItem.stock}
    />)}

    </>
  )
}

export default ItemsList
