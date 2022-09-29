import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="text-center m-10 ">
      <h1 className="text-6xl mb-5">Page Not Found</h1>
      <p>....Check if you are in the correct page....</p>
      <Link href="/">
        <button className="hover: bg-red-600 p-2 m-3 text-white border-r-orange-300">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
