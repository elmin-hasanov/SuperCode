type probs = {
  img: string;
  title: string;
  description: string;
  price: number;
};

const ShopItems = (probs: probs) => {
  return (
    <div>
      <img src={probs.img} alt="" />
      <p>{probs.title}</p>
      <p>{probs.description}</p>
      <p>{probs.price} €</p>
    </div>
  );
};

export default ShopItems;
