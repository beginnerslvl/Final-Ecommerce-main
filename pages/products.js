import React from 'react';
import { client } from '../lib/client';
import AllProducts from '../components/AllProducts'; // Assuming your component is named AllProducts

const Products = ({ allProducts }) => {
  return (
    <div className='Allproducts-container'>
      {allProducts?.map((product) => (
        <AllProducts key={product._id} allproducts={product} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const allProducts = await client.fetch(query);

  return {
    props: { allProducts },
  };
};

export default Products;
