import axios from "axios";
import ServiceDetails from "../../components/ServiceDetails";

export const getStaticPaths = async () => {
  try {
    const res = await axios.get(`${process.env.url}/services/`);
    const services = res.data;
    // map data to an array of path objects with params (slug or id -> then needs to add toString)
    const paths = services.map((service) => {
      return {
        params: { slug: service.slug },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { error };
  }
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  try {
    const res = await axios.get(`${process.env.url}/services/?slug=${slug}`);
    const service = res.data[0];
    return { props: { service } };
  } catch (error) {
    return { error };
  }
};

const Details = ({ service }) => {
  return (
    <div>
      <ServiceDetails service={service} />
    </div>
  );
};

export default Details;

// for each individual page: get the data for that page
// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   const res = await fetch(`${process.env.url}/services/?slug=${slug}`);
//   const data = await res.json();
//   // console.log(data);
//   const service = data[0];

//   return {
//     props: { service },
//   };
// }
// export const getStaticPaths = async () => {
//   const res = await fetch(`${process.env.url}/services/`);
//   const data = await res.json();

//   // map data to an array of path objects with params (slug or id -> then needs to add toString)
//   const paths = data.map((service) => {
//     return {
//       params: { slug: service.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };
