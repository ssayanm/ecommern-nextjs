import { useEffect, createContext, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const url = `${process.env.NEXT_API_URLL}/api/products/`;
// console.log(`${process.env.NEXT_API_URLL}/api/products/`);

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getProducts = async () => {
      try {
        const response = await axios.get(`http:localhost:5000/api/products/`);

        const products = response.data;

        setProducts(products);
        setLoading(false);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    getProducts();

    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
