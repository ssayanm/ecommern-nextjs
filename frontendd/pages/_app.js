import { useEffect } from "react";
import AOS from "aos";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/slider.css";
import "aos/dist/aos.css";

import ProductProvider from "../context";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      once: false,
      delay: 200,
      duration: 1200,
      offset: 50,
    });
  }, []);
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
};

export default MyApp;
