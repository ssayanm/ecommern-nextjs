import BlogCard from "./BlogCard";
import Link from "next/link";

const BlogList = ({ blogs, showLink }) => {
  return (
    <section className="py-20 lg:py-32 ">
      <div
        className="container px-4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex flex-wrap justify-center text-center mb-6 lg:mb-24">
          <div className="w-full xl:w-6/12 px-4">
            <h2 className="text-4xl lg:text-5xl font-semibold text-pink-600 font-display tracking-wider">
              Our Blog
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />
          </div>
        </div>

        {/* Blog Card Wrapper*/}
        <div className="flex flex-wrap">
          {blogs.map((blog) => (
            <BlogCard {...blog} key={blog.id} />
          ))}
        </div>
        <div className="flex justify-center">
          {showLink && (
            <Link href="/posts">
              <a className="btnpink">Read More</a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
