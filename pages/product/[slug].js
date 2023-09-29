import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {CgShoppingCart} from 'react-icons/cg'
import { useStateContext } from '../../context/StateContext';
import { useRouter } from 'next/router'; 

const localProducts = [
    { slug: 'product-1', title: 'Product 1', description: 'Description for Product 1' },
    { slug: 'product-2', title: 'Product 2', description: 'Description for Product 2' },
    // Add more products as needed
  ];

  const ProductDetails = ({ products }) => {
    const router = useRouter(); // Initialize the router
    const { slug } = router.query; // Get the slug from the router query
  
    // Find the product in the local array based on the slug
    const product = products.find((p) => p.slug === slug);
  
    if (!product) {
      return <div>Loading...</div>; // Handle the case where the product is not found
    }
  
    const { image, name, details, price, tags, care } = product;
    const [index, setIndex] = useState(0);
    const {decQty, incQty, qty, onAdd} = useStateContext();

    const careList = [];

    {for (let i = 0; i < care.length; i++) {
        careList.push(care[i].children[0].text)
    }}

    return (
        <div className='products'>
          <div className='product-detail-container'>
            <div className='product-images'>
              <div className='small-images-container'>
                {images.map((image, ind) => (
                  <img key={ind} src={image} className='small-image' onMouseEnter={() => setIndex(ind)} />
                ))}
              </div>
              <div className='big-image-container'>
                <img src={images[index]} alt={name} />
              </div>
            </div>
            <div className='product-details'>
              <div className='name-and-category'>
                <h3>{name}</h3>
                <span>{tags}</span>
              </div>
              {/* ... Rest of your component code */}
            </div>
          </div>
          <div className='product-desc-container'>
            <div className='desc-title'>
              <div className="desc-background">
                Overview
              </div>
              <h2>Product Information</h2>
            </div>
            <div className='desc-details'>
              <h4>PRODUCT DETAILS</h4>
              <p>{details[0].children[0].text}</p>
            </div>
            <div className='desc-care'>
              <h4>PRODUCT CARE</h4>
              <ul>
                {careList.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    
}
export default ProductDetails

// Define your local array of products with predefined slugs
  
  export const getStaticProps = async ({ params: { slug } }) => {
    // Find the product in the local array based on the provided slug
    const product = localProducts.find((p) => p.slug === slug);
  
    return {
      props: { product },
    };
  };
  
  // Generates `/product-1` and `/product-2` paths based on the predefined slugs
  export const getStaticPaths = async () => {
    const paths = localProducts.map((product) => ({
      params: {
        slug: product.slug,
      },
    }));
  
    return {
      paths,
      fallback: 'blocking',
    };
  };
  