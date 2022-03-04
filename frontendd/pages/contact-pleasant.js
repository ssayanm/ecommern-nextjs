import Image from "next/image";
import Meta from "../components/Meta";
import Social from "../components/Social";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 lg:py-32">
      <Meta title="Contact" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center">
          <div
            className="w-full lg:w-8/12 px-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-pink-600">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />
            <div className="flex flex-col sm:flex-row mt-10">
              <div className=" md:w-1/2  bg-white p-6 rounded shadow  mb-8">
                <form action="https://formspree.io/f/mknkbbza" method="POST">
                  <h3 className="text-2xl font-bold text-indigo-600">
                    Get In Touch
                  </h3>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    aria-label="name"
                    className="inputbox"
                  />
                  <input
                    type="text"
                    placeholder="phone"
                    name="phone"
                    aria-label="phone"
                    className="inputbox"
                  />
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    aria-label="email"
                    className="inputbox"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    aria-label="message"
                    placeholder="message"
                    className="inputbox"
                  ></textarea>

                  <button type="submit" className="btnpink">
                    submit
                  </button>
                </form>
              </div>
              <div className="md:w-1/3 mx-0 md:mx-10">
                <Image
                  alt="Pleasant Smith"
                  src="/pleasant.jpg"
                  layout="responsive"
                  width={600}
                  height={600}
                  objectFit="cover"
                  quality={100}
                  className="rounded shadow-lg"
                />
                <div className="mt-4">
                  <a
                    href="mailto:Pleasantsmith17@gmail.com"
                    className="flex justify-center items-center"
                  >
                    <FaEnvelope className="m-2 text-pink-600 text-xl" />
                    <span className="text-lg">Pleasantsmith17@gmail.com</span>
                  </a>

                  <a
                    href="tel: 8606064401"
                    className="flex justify-center items-center"
                  >
                    <FaMobileAlt className="text-indigo-600 text-xl" />{" "}
                    <span className="text-lg">(860) 606 - 4401</span>
                  </a>
                  <div className="inline-flex mb-8">
                    <Social />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
