import Link from "next/link";
import React from "react";
import { AiFillUpSquare } from "react-icons/ai";

type Props = {};

const TopUp = (props: Props) => {
  return (
    <div>
      <div className=" py-5 flex justify-center md:justify-center cursor-pointer animate-pulse">
        <Link href="">
          <a href="/">
            <AiFillUpSquare className=" items-center w-20 h-5" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TopUp;
