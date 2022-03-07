import axios from "axios";

import BlogList from "../components/BlogList";
import Info from "../components/Info";
import ServiceList from "../components/ServiceList";
import Meta from "../components/Meta";
import MiniContact from "../components/MiniContact";
import Testimonials from "../components/Testimonials";
import Slider from "../components/Slider";

export const getStaticProps = async () => {
  try {
    // const res = await axios.get(`${process.env.NEXT_API_URL}/blogs/`);
    // const res1 = await axios.get(`${process.env.NEXT_API_URL}/testimonials/`);
    // const res2 = await axios.get(`${process.env.NEXT_API_URL}/home/`);
    // const res3 = await axios.get(`${process.env.NEXT_API_URL}/services/`);
    const res4 = await axios.get(`${process.env.burl}/api/products/`);
    console.log(res4);
    // const blogs = res.data;
    // const testimonials = res1.data;
    // const home = res2.data;
    // const services = res3.data;
    const products = res4.data;

    return { props: { products } };
  } catch (error) {
    return { error };
  }
};

// export const getStaticProps = async () => {
//   try {
//     const res = await axios.get(`${process.env.url}/blogs/`);
//     const res1 = await axios.get(`${process.env.url}/testimonials/`);
//     const res2 = await axios.get(`${process.env.url}/home/`);
//     const res3 = await axios.get(`${process.env.url}/services/`);

//     const blogs = res.data;
//     const testimonials = res1.data;
//     const home = res2.data;
//     const services = res3.data;

//     return { props: { blogs, testimonials, home, services } };
//   } catch (error) {
//     return { error };
//   }
// };

const Home = ({ blogs, testimonials, home, services, products }) => {
  return (
    <>
      <Meta
        title="Home"
        // description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <Slider />
      {/*  <ServiceList services={services} products={products} />*/}
      {/*<Info home={home} />
      
      <MiniContact />
      <Testimonials testimonials={testimonials} />
  <BlogList blogs={blogs} showLink />*/}
    </>
  );
};

export default Home;
