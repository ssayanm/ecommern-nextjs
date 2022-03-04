import Image from "next/image";
import { getStrapiMedia } from "../media";
import Link from "next/link";
import Meta from "../components/Meta";
import { FaUserEdit } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const BlogDetails = ({ blog }) => {
  const { title, content, author, image, desc } = blog;

  return (
    <>
      <Meta title={title} description={desc} />
      <section className="py-20 lg:py-32 ">
        <div
          className="container px-4 mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-wrap justify-center text-center mb-6">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-indigo-500">
                {title}
              </h2>
              <p className="mt-1 text-sm text-pink-600  font-semibold leading-relaxed flex justify-center items-center ">
                <FaUserEdit className="mr-1" /> {author}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:mb-0 mb-12 px-4 mx-auto">
              <div className="px-6 flex items-center flex-col">
                <Image
                  alt={title}
                  src={getStrapiMedia(image.url)}
                  width={720}
                  height={400}
                  objectFit="cover"
                  quality={100}
                  className="shadow-lg rounded max-w-full mx-auto"
                />

                <div className="pt-6">
                  <ReactMarkdown
                    children={content}
                    className="leading-relaxed text-lg ptext mt-4 mx-auto"
                  />
                </div>
                <Link href="/contact-pleasant">
                  <a className="btn">Contact</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
