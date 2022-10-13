import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="text-center m-10 ">
      <h1 className="text-6xl mb-5">Page Not Found</h1>
      <p>....This page is under maintenance by the author....</p>
      <small>_jordantanaliga100</small>
      <Link href="/">
        <button className="hover: bg-red-600 p-2 m-3 text-white">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
