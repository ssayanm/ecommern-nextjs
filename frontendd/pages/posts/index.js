import axios from "axios";
import BlogList from "../../components/BlogList";
import Meta from "../../components/Meta";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/blogs/`);
    const blogs = res.data;
    return { props: { blogs } };
  } catch (error) {
    return { error };
  }
};

const index = ({ blogs }) => {
  return (
    <>
      <Meta
        title="Blog"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <BlogList blogs={blogs} />
    </>
  );
};

export default index;

// export const getStaticProps = async () => {
//   const res = await fetch(`${process.env.url}/blogs/`);
//   const blogs = await res.json();

//   return {
//     props: { blogs },
//   };
// };
