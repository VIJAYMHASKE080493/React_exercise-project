import React from 'react';

const ProductCard = ({ name, price, description }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem' }}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
