import React from 'react';

type ProductProps = {
  title: string;
  image: string;
  price: number;
  description: string;
};

const ProductDetail: React.FC<ProductProps> = ({
  title,
  image,
  price,
  description,
}) => {
  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>{title}</h1>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      <p>{description}</p>
      <strong>{price.toFixed(2)} €</strong>
      <button>Kaufen</button>
    </div>
  );
};

export default ProductDetail;
