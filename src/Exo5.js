import React from 'react';
import Product from './Exo5Product';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Merguez', price: 10.99 },
    { id: 2, name: 'Chipo', price: 19.99 },
    { id: 3, name: 'Brochette', price: 5.99 },
  ];

  return (
    <div>
      <h2>Liste de produits :</h2>
      <ul>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
