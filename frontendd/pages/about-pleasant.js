import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Meta from "../components/Meta";
import { getStrapiMedia } from "../media";

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.url}/about/`);
    const about = res.data;
    return { props: { about } };
  } catch (error) {
    return { error };
  }
};

const About = ({ about }) => {
  const { title, name, quote, content, image } = about;
  return (
    <section className="py-20 lg:py-32 bg-brown-50">
      <Meta
        title="About Pleasant"
        description="Connecticut Certified Relationship Coach Pleasant Smith"
      />
      <div
        className="container px-4 mx-auto "
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full xl:w-8/12 px-4">
            <h2 className="text-4xl lg:text-5xl font-semibold text-pink-600">
              {title}
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />

            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-2/5 text-center sm:pr-8">
                <Image
                  alt="Pleasant Smith"
                  src={getStrapiMedia(image.url)}
                  layout="responsive"
                  width={400}
                  height={500}
                  objectFit="cover"
                  quality={100}
                  className="rounded shadow-lg"
                />

                <div className="flex flex-col items-center text-center justify-center">
                  <h3 className="font-bold title-font mt-4  text-2xl text-pink-600">
                    {name}
                  </h3>
                  <h3 className="font-semibold  text-xl text-gray-800">
                    {quote}
                  </h3>
                  <div className="hidden md:block lg:block xl:block w-12 h-1 lg:bg-indigo-600 rounded mt-2 mb-8"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8  sm:border-l border-gray-200 sm:border-t-0 border-t mt-4  sm:mt-0 text-center sm:text-left">
                <ReactMarkdown
                  children={content}
                  className=" text-lg ptext mb-4 mt-4 md:mt-0"
                />

                <Link href={`/contact-pleasant`}>
                  <a className="btnpink">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
