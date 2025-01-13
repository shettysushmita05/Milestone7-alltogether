import React from 'react';

const Products = () => {
  const productList = [
    { name: 'Product 1', price: '$10' },
    { name: 'Product 2', price: '$20' },
    { name: 'Product 3', price: '$30' },
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productList.map((product, index) =>(
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
