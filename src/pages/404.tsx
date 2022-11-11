import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type Props = {};

const Page404 = (props: Props) => {
  const router = useRouter();
  return (
    <div className="text-center m-10 pt-40 h-full">
      <h1 className="text-2xl md:text-5xl mb-5">Page Not Found</h1>
      <p className="font-thin">
        ....This page is under maintenance by the author....
      </p>
      <section className="md:grid justify-center md:pt-5">
        <small className="text-white pt-5">_jordantanaliga100</small>
        <button className="hover: bg-red-600 p-2 m-3 text-white">
          <span onClick={() => router.back()}> ...go back</span>
        </button>
      </section>
    </div>
  );
};

export default Page404;
