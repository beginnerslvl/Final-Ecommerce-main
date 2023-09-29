import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ProductDetails = ({ product }) => {
  const { image, name, details, price, tags, care } = product;
  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1); // Assuming you want to manage quantity
  const careList = [];

  for (let i = 0; i < care.length; i++) {
    careList.push(care[i].children[0].text);
  }

  // Function to decrement quantity
  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  // Function to increment quantity
  const incQty = () => {
    setQty(qty + 1);
  };

  return (
    <div className='products'>
      <div className='product-detail-container'>
        <div className='product-images'>
          <div className='small-images-container'>
            {image?.map((item, ind) => (
              <img
                key={ind}
                src={item} // Assuming the 'image' property in your product object contains image URLs
                className='small-image'
                onMouseEnter={() => setIndex(ind)}
              />
            ))}
          </div>
          <div className='big-image-container'>
            <img src={image && image[index]} alt={name} />
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
              <span className='minus' onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div className='add-to-cart'>
            <button
              className='btn'
              type='button'
              onClick={() => onAdd(product, qty)} // Assuming you have an 'onAdd' function defined elsewhere
            >
              <CgShoppingCart size={20} />
              Add to Cart
            </button>
            <p className='price'>$ {price}.00</p>
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
};

export default ProductDetails;
