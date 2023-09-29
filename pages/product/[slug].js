import { useRouter } from 'next/router';
import ProductDetails from '../../components/ProductDetails'; // Import the ProductDetails component

// Local product data
const products = [
  {
    slug: 'product-1',
    name: 'Product 1',
    description: 'Description for Product 1',
    image: [ // An array of image URLs
      'https://miro.medium.com/v2/resize:fit:1358/1*gGLcu5InZhIG2IMwluQSzQ.jpeg',
      'https://miro.medium.com/v2/resize:fit:1358/1*gGLcu5InZhIG2IMwluQSzQ.jpeg',
    ],
    // Add other product data fields as needed
  },
  {
    slug: 'product-2',
    name: 'Product 2',
    description: 'Description for Product 2',
    image: [ // An array of image URLs
      'https://miro.medium.com/v2/resize:fit:1358/1*gGLcu5InZhIG2IMwluQSzQ.jpeg',
      'https://miro.medium.com/v2/resize:fit:1358/1*gGLcu5InZhIG2IMwluQSzQ.jpeg',
    ],
    // Add other product data fields as needed
  },
  // Add more products as needed
];

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the product in the local array based on the slug
  const product = products.find((p) => p.slug === slug);

  // Handle the case where the product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Render the ProductDetails component with the product data */}
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
