import React, { useState } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaArrowRight,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../media";

const Review = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const { name, content, image } = testimonials[index];

  const checkNumber = (number) => {
    if (number > testimonials.length - 1) {
      return 0;
    }
    if (number < 0) {
      return testimonials.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * testimonials.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full px-4" data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-4xl lg:text-5xl font-semibold text-pink-600 font-display tracking-wider">
              Testimonials
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />
            <div className="w-full md:w-1/2  mx-auto mt-16 bg-gray-50 px-4 py-8 md:px-8 rounded shadow-md text-center hover:shadow-lg">
              <div className="relative w-40 h-40 rounded-full mx-auto mb-6 bg-pink-600">
                <Image
                  alt={name}
                  src={getStrapiMedia(image.url)}
                  layout="responsive"
                  width={175}
                  height={175}
                  objectFit="cover"
                  quality={100}
                  className=" inline-block rounded-full relative"
                />

                <span className="bg-pink-600 text-white absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full">
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className="text-indigo-600 title-font tracking-wider text-xl font-bold my-2">
                {name}
              </h4>

              <ReactMarkdown
                children={
                  readMore ? content : `${content.substring(0, 200)}...`
                }
                className="leading-relaxed text-lg italic ptext max-h-full"
              />

              <div className="flex items-center flex-wrap justify-center mb-6">
                <button
                  onClick={() => setReadMore(!readMore)}
                  className="text-pink-600 focus:outline-none font-bold flex items-center flex-wrap justify-center"
                >
                  {readMore ? "Show Less" : "Read More"}
                  <FaArrowRight className="w-3 h-3 ml-2" />
                </button>
              </div>

              <div>
                <button className="prev-btn" onClick={prevPerson}>
                  <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

// import TestimonialCard from "./TestimonialCard";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Testimonials = ({ testimonials }) => {
//   return (
//     <section className="relative py-20 lg:py-32 bg-white">
//       <div className="container mx-auto ">
//         <div className="flex flex-wrap justify-center text-center">
//           <div className="w-full px-4" data-aos="fade-up" data-aos-delay="600">
//             <h2 className="text-4xl lg:text-5xl font-semibold text-pink-600 font-display tracking-wider">
//               Testimonials
//             </h2>
//             <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />{" "}
//             <div className="w-full md:w-3/4  mx-auto text-center mt-16"></div>
//             <Carousel showThumbs={false} showStatus={false} showArrows={true}>
//               {testimonials.map((testimonial) => (
//                 <TestimonialCard {...testimonial} key={testimonial.id} />
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
