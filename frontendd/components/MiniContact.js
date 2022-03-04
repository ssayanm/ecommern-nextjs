import Link from "next/link";

const MiniContact = () => {
  return (
    <section
      className="relative py-20 lg:py-32 bg-indigo-400"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <div className="container mx-auto ">
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-semibold text-white font-display tracking-wider pb-4">
            Ready to Talk
          </h3>

          <Link href="/contact-pleasant">
            <a className="btnwhite ">Let's get started</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniContact;
