import React from "react";

type ProductItemProps = {
  titleProduct: string;
  imageProduct: string;
  priceProduct: number;
  cssClass?: string;
  descritionProduct?: string;
  // der Typ von children ist immer React.ReactNode
  children?: React.ReactNode;
};

const ProductItem = (probs: ProductItemProps) => {
  console.log(probs);
  return (
    <div className={probs.cssClass}>
      <img src={probs.imageProduct} />
      <h2>{probs.titleProduct}</h2>
      <p>{probs.priceProduct}</p>
      <p>{probs.descritionProduct}</p>
      {probs.children}
      {/* <button>Buy now</button> */}
    </div>
  );
};

export default ProductItem;

//=> Destructuring
//-> https://www.w3schools.com/js/js_destructuring.asp

// const ProductItem = (probs: ProductItemProps) => {
//     const imgUrl = probs.imageProduct;
//     const title = probs.titleProduct;
//     const price = probs.priceProduct;
//       von ⬆️ ist die Kurzform ⬇️
//   const { titleProduct, imageProduct, priceProduct } = probs;

//   return (
//     <>
//       <img src={imageProduct} />
//       <h2>{titleProduct}</h2>
//       <p>{priceProduct}</p>
//       <button>Buy now</button>
//     </>
//   );
// };

// export default ProductItem;