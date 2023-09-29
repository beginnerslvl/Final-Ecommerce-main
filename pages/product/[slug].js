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

export async function getStaticPaths() {
    // Fetch slugs from your data source or use a predefined array
    const slugs = ['product-1', 'product-2']; // Example predefined slugs
  
    // Map slugs to the format required by Next.js
    const paths = slugs.map((slug) => ({
      params: { slug },
    }));
  
    return {
      paths,
      fallback: false, // or 'blocking' depending on your use case
    };
  }
  
  // Define getStaticProps to fetch data for a specific product
  export async function getStaticProps({ params }) {
    // Fetch data for the specific product based on params.slug
    const product = fetchProductData(params.slug);
  
    return {
      props: {
        product,
      },
    };
  }

export default ProductPage;
