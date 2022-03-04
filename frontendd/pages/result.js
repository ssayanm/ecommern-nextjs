import { useRouter } from "next/router";
import Link from "next/link";
// import PrintObject from "../components/PrintObject";

import { fetchGetJSON } from "../utils/api-helpers";
import useSWR from "swr";
import Meta from "../components/Meta";

const ResultPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  return (
    <section className="not-found py-20 lg:py-32 bg-brown-50 h-full">
      <Meta title="Checkout Payment Result " />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-5xl font-semibold text-pink-600">
              Thank you for your payment!
            </h2>
            <p className="text-lg leading-relaxed m-4">
              Checkout Payment Result :{" "}
              {data?.payment_intent?.status ?? "loading..."}
            </p>

            <Link href="/">
              <a className="btn">Go Back</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;

// {<PrintObject content={data ?? "loading..."} />
