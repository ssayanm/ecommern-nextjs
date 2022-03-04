import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../media";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ id, title, slug, image, desc }) => {
  return (
    <div
      className="w-full md:w-1/2 lg:w-3/12  lg:mb-0 mb-12 px-4 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
      data-aos="flip-right"
    >
      <Link href={`/services/${slug}`} key={id} className="">
        <a>
          <div className="px-6 py-8 flex items-center flex-col bg-white cursor-pointer hover:bg-pink-200">
            <Image
              alt="Gym"
              src={getStrapiMedia(image.url)}
              width={150}
              height={150}
              objectFit="cover"
              quality={100}
              className="p-4 shadow-lg "
              //   layout="responsive"
              //   className="shadow-lg  max-w-full mx-auto hover:scale-100"
            />

            <div className="pt-6 text-center">
              <h5 className="text-xl font-semibold text-indigo-600 tracking-wider">
                {title}
              </h5>
              <p className="mt-1  leading-relaxed">{desc}</p>
              <div className="flex items-center flex-wrap mt-4 justify-center">
                <span className="text-pink-600 inline-flex items-center font-bold md:mb-2 lg:mb-0">
                  Learn More <FaArrowRight className="w-3 h-3 ml-2" />
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ServiceCard;
