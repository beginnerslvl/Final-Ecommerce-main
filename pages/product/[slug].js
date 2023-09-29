import React, { useState } from 'react';

const localProducts = [
  {
    slug: 'product-1',
    image: ['image-url-1', 'image-url-2'],
    name: 'Product 1',
    details: [{ children: [{ text: 'Product 1 details' }] }],
    price: 10,
    tags: 'Tag 1',
    care: [{ children: [{ text: 'Care instructions for Product 1' }] }],
  },
  {
    slug: 'product-2',
    image: ['image-url-3', 'image-url-4'],
    name: 'Product 2',
    details: [{ children: [{ text: 'Product 2 details' }] }],
    price: 15,
    tags: 'Tag 2',
    care: [{ children: [{ text: 'Care instructions for Product 2' }] }],
  },
];
console.log(localProducts)

const ProductDetails = ({ productSlug }) => {
  console.log("Product Slug:", productSlug);  
  const product = localProducts.find((p) => p.slug === productSlug);
  console.log("Found Product:", product);
  if (!product) {
    return <div>Product not found</div>;
  }

  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const onAdd = (product, quantity) => {
    // Implement your "Add to Cart" logic here
    console.log(`Added ${quantity} ${product.name}(s) to cart.`);
  };

  return (
    <div className='products'>
      <div className='product-detail-container'>
        <div className='product-images'>
          <div className='small-images-container'>
            {product.image.map((item, ind) => (
              <img
                key={ind}
                src={item}
                className='small-image'
                onMouseEnter={() => setIndex(ind)}
              />
            ))}
          </div>
          <div className='big-image-container'>
            <img src={product.image[index]} />
          </div>
        </div>
        <div className='product-details'>
          <div className='name-and-category'>
            <h3>{product.name}</h3>
            <span>{product.tags}</span>
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
              <span className='minus' onClick={decQty}>
                -
              </span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}>
                +
              </span>
            </div>
          </div>
          <div className='add-to-cart'>
            <button
              className='btn'
              type='button'
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <p className='price'>$ {product.price}.00</p>
          </div>
        </div>
      </div>

      <div className='product-desc-container'>
        <div className='desc-title'>
          <div className='desc-background'>Overview</div>
          <h2>Product Information</h2>
        </div>
        <div className='desc-details'>
          <h4>PRODUCT DETAILS</h4>
          <p>{product.details[0]?.children[0]?.text}</p>
        </div>
        <div className='desc-care'>
          <h4>PRODUCT CARE</h4>
          <ul>
            {product.care.map((list, index) => (
              <li key={index}>{list.children[0]?.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
