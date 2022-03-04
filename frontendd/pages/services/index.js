import axios from "axios";
import ServiceList from "../../components/ServiceList";
import Meta from "../../components/Meta";

// export const getStaticProps = async () => {
//   try {
//     const res = await axios.get(`${process.env.url}/services/`);
//     const services = res.data;
//     return { props: { services } };
//   } catch (error) {
//     return { error };
//   }
// };

const index = ({ services }) => {
  return (
    <>
      <Meta
        title="Services"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <ServiceList services={services} />
    </>
  );
};

export default index;

// export const getStaticProps = async () => {
//   const res = await fetch(`${process.env.url}/services/`);
//   const services = await res.json();

//   return {
//     props: { services },
//   };
// };
