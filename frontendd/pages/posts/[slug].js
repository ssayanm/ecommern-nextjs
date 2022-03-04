import axios from "axios";
import BlogDetails from "../../components/BlogDetails";

export const getStaticPaths = async () => {
  try {
    const res = await axios.get(`${process.env.url}/blogs/`);
    const blogs = res.data;
    // map data to an array of path objects with params (slug or id -> then needs to add toString)
    const paths = blogs.map((blog) => {
      return {
        params: { slug: blog.slug },
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
    const res = await axios.get(`${process.env.url}/blogs/?slug=${slug}`);
    const blog = res.data[0];
    return { props: { blog } };
  } catch (error) {
    return { error };
  }
};

const Details = ({ blog }) => {
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default Details;

// for each individual page: get the data for that page
// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   const res = await fetch(`${process.env.url}/blogs/?slug=${slug}`);
//   const data = await res.json();
//   // console.log(data);
//   const blog = data[0];

//   return {
//     props: { blog },
//   };
// }
// export const getStaticPaths = async () => {
//   const res = await fetch(`${process.env.url}/blogs/`);
//   const data = await res.json();

//   // map data to an array of path objects with params (slug or id -> then needs to add toString)
//   const paths = data.map((blog) => {
//     return {
//       params: { slug: blog.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };
