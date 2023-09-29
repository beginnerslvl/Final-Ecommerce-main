import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import { useStateContext } from '../../context/StateContext';

const localProducts = [
    {
      slug: 'product-1', // Add slug property matching the expected slug
      image: ['image-url-1', 'image-url-2'],
      name: 'Product 1',
      details: [{ children: [{ text: 'Product 1 details' }] }],
      price: 10,
      tags: 'Tag 1',
      care: [{ children: [{ text: 'Care instructions for Product 1' }] }],
    },
    {
      slug: 'product-2', // Add slug property matching the expected slug
      image: ['image-url-3', 'image-url-4'],
      name: 'Product 2',
      details: [{ children: [{ text: 'Product 2 details' }] }],
      price: 15,
      tags: 'Tag 2',
      care: [{ children: [{ text: 'Care instructions for Product 2' }] }],
    },
  ];

const ProductDetails = ({ productSlug }) => {
  const product = localProducts.find((p) => p.slug === productSlug);
  console.log(product)

  if (!product) {
    return <div>Loading...</div>;
  }
  


  const { image, name, details, price, tags, care } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  const careList = care.map((item) => item.children[0].text);

    return (
        <div className='products'>
            <div className='product-detail-container'>
                <div className='product-images'>
                    <div className='small-images-container'>
                        {image?.map((item, ind) => (
                            <img 
                            key={ind}
                            src={urlFor(item)} 
                            className='small-image' 
                            onMouseEnter={() => setIndex(ind)} />
                        ))}
                    </div>
                    <div className='big-image-container'>
                        <img src={urlFor(image && image[index])} />
                    </div>
                </div>
                <div className='product-details'>
                    <div className='name-and-category'>
                        <h3>{name}</h3>
                        <span>{tags}</span>   
                    </div>
                    <div className='size'>
                        <p>SELECT SIZE</p>
                        <ul>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                    <div className='quantity-desc'>
                        <h4>Quantity: </h4>
                        <div>
                            <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                            <span className='num' onClick=''>{qty}</span>
                            <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
                        </div>
                    </div>
                    <div className='add-to-cart'>
                        <button className='btn' type='button' onClick={() => onAdd(product, qty)}><CgShoppingCart size={20} />Add to Cart</button>
                        <p className='price'>${price}.00</p>  
                    </div>
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
                    {careList.map(list => (
                        <li>{list}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails

// ... (other imports and code)

export const getStaticProps = async ({ params }) => {
    const { slug } = params; // Extract the slug parameter from params
  
    const product = localProducts.find((p) => p.slug === slug);
  
    if (!product) {
      return {
        notFound: true, // Return a 404 error if the product is not found
      };
    }
  
    return {
      props: { product },
    };
  };
  
  
  export const getStaticPaths = async () => {
    const paths = localProducts.map((product, index) => ({
      params: {
        slug: `product-${index + 1}`,
      },
    }));
  
    return {
      paths,
      fallback: false, // Change to 'blocking' or 'true' as needed
    };
  };
  
  


