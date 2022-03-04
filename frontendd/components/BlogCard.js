import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "../media";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ id, title, slug, content, author, image, desc }) => {
  return (
    <div className="w-full md:w-4/12  mb-20 px-4 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
      <Link href={`/posts/${slug}`} key={id} className="">
        <a>
          <div className="flex items-center flex-col  border bg-white border-gray-200 rounded-lg ">
            <Image
              alt={title}
              src={getStrapiMedia(image.url)}
              width={720}
              height={400}
              objectFit="cover"
              quality={100}
              className="shadow-lg  max-w-full mx-auto hover:scale-100"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold  mb-3 text-pink-600 tracking-wider text-center md:text-left">
                {title}
              </h4>
              <p className="leading-relaxed mb-3 text-center md:text-left">
                {desc}
              </p>
              <span className="text-indigo-600 flex items-center justify-center md:justify-start font-bold md:mb-2 lg:mb-0 ">
                Learn More <FaArrowRight className="w-3 h-3 ml-2" />
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
