import Image from "next/image";
import React from "react";
import Navbar from "../../components/Navbar";
import img from "/public/assets/img/projects.jpeg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import Layout from "../../Layout/Layout";
import Overview from "../../components/Overview";

type Props = {};

const Projectoverview = (props: Props) => {
  return (
    <Layout>
      <Overview />
    </Layout>
  );
};

export default Projectoverview;
