import Meta from "../components/Meta";
import PaymentForm from "../components/PaymentForm";

const Payment = () => {
  return (
    <section className="py-20 lg:py-32">
      <Meta title="Payment" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center">
          <div
            className="w-full lg:w-5/12 px-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-pink-600">
              Payment Method
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4" />
            <PaymentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
