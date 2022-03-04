import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../components/Meta";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <section className="not-found py-20 lg:py-32 bg-brown-50 h-full">
      <Meta title="404 - Not Found" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-5xl font-semibold uppercase">Oops....</h2>
            <p className="text-lg leading-relaxed m-4">Page cannot be found</p>
            <Link href="/">
              <a className="btn">Go Back</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
