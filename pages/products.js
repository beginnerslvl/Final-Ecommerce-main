import React from 'react';
import { AllProducts } from '../components';
import products from '../lib/productsData';
const Products = () => {
  return (
    <div className='Allproducts-container'>
      {products.map((product) => (
        <AllProducts key={product.id} allproducts={product} />
      ))}
    </div>
  );
};

export default Products;
