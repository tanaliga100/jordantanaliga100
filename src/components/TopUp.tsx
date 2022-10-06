import React from "react";
import { AiFillUpSquare } from "react-icons/ai";
import Link from "next/link";

type Props = {};

const TopUp = (props: Props) => {
  return (
    <div>
      <div className=" py-5 flex justify-center md:justify-center cursor-pointer animate-pulse">
        <Link href="/">
          <AiFillUpSquare className=" items-center w-20 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default TopUp;
