import Image from "next/image";
import { getStrapiMedia } from "../media";
import Link from "next/link";
import Meta from "../components/Meta";
import { FaUserEdit } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const ServiceDetails = ({ service }) => {
  const { title, content, image, desc } = service;

  return (
    <>
      <Meta title={title} description={desc} />
      <section className="py-20 lg:py-32 ">
        <div
          className="container px-4 mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:mb-0 mb-12 px-4 mx-auto">
              <div className="px-6 flex items-center flex-col">
                <Image
                  alt={title}
                  src={getStrapiMedia(image.url)}
                  width={300}
                  height={300}
                  objectFit="cover"
                  quality={100}
                  className="shadow-lg rounded max-w-full mx-auto"
                />
                <h2 className="text-4xl font-semibold text-indigo-500 pt-6">
                  {title}
                </h2>
                <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />
                <div className="pt-2">
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

export default ServiceDetails;
