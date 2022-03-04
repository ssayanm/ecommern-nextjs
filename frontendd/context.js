import { useEffect, createContext, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getProducts = async () => {
      try {
        const response = await axios.get(`${process.env.url}/services/`);
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
