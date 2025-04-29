import React, { useState } from 'react';

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
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  return (
    <div
      style={{
        padding: '1.5rem',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.5',
      }}
      role="region"
      aria-label={`Produktdetails für ${title}`}
    >
      <h1>{title}</h1>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <p>{description}</p>
      <strong>{price.toFixed(2)} €</strong>
      <br />
      <button
        onClick={handleAddToCart}
        disabled={addedToCart}
        aria-pressed={addedToCart}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: addedToCart ? '#ccc' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        {addedToCart ? 'Im Warenkorb' : 'In den Warenkorb'}
      </button>
    </div>
  );
};

export default ProductDetail;
