import React from 'react';
import Link from 'next/link';

// Product data stored as variables
const productData = [
  {
    _id: '1',
    name: 'Product 1',
    slug: 'product-1',
    tags: ['tag1', 'tag2'],
    price: 20.0,
    image: 'https://miro.medium.com/v2/resize:fit:1358/1*gGLcu5InZhIG2IMwluQSzQ.jpeg',
  },
  {
    _id: '2',
    name: 'Product 2',
    slug: 'product-2',
    tags: ['tag2', 'tag3'],
    price: 25.0,
    image: 'https://miro.medium.com/v2/resize:fit:1358/1*gGLcu5InZhIG2IMwluQSzQ.jpeg',
  },
  // Add more products as needed
];

const AllProducts = () => {
  return (
    <div>
      {productData.map((product) => (
        <Link key={product._id} href={`/product/${product.slug}`}>
          {/* Wrap each product card in a Link */}
          <div className='Allproduct-card'>
            <img src={product.image} width={250} height={270} alt={product.name} />
            <p className='Allproduct-name'>{product.name}</p>
            <p className='Allproduct-tags'>{product.tags.join(', ')}</p>
            <p className='Allproduct-price'>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllProducts;
