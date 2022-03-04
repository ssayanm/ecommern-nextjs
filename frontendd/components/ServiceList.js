import ServiceCard from "./ServiceCard";

const ServiceList = ({ services }) => {
  return (
    <section className="py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-8 lg:mb-10">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl lg:text-5xl font-semibold text-pink-600 font-display tracking-wider">
              Latest Products
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />
          </div>
        </div>

        <div className="flex flex-wrap">
          {services.map((service) => (
            <ServiceCard {...service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
