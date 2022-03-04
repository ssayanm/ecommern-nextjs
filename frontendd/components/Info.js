import ReactMarkdown from "react-markdown";

const Info = ({ home }) => {
  const { infotitle, content } = home;
  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full px-4" data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-4xl lg:text-5xl font-semibold text-pink-600 font-display tracking-wider">
              {infotitle}
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />
            <ReactMarkdown
              children={content}
              className=" text-lg ptext leading-relaxed lg:m-8 mx-4 my-6 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
