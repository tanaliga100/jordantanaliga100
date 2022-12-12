import type { NextPage } from "next";
import React, { Fragment } from "react";
import "tailwindcss/tailwind.css";

// COMPONENTS IMPORTS
import About from "../components/About";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
// NEXT IMPORTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TopUp from "../components/TopUp";

type Props = {
  children?: React.ReactNode;
};
const Home: NextPage<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <Main />
        <About />
        <Projects />
        <TechStack />
        <Certificates />
        <Contact />
        <TopUp />
      </div>
    </React.Fragment>
  );
};
export default Home;
