import React from 'react';

const Product = ({ product }) => {
  return (
    <li>
      <p>Nom : {product.name}</p>
      <p>Prix : {product.price} €</p>
    </li>
  );
};

export default Product;
