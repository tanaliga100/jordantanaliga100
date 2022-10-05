import React, { Fragment } from "react";
import "tailwindcss/tailwind.css";
import type { NextPage } from "next";

// COMPONENTS IMPORTS
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
// NEXT IMPORTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};
const Home: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Main />
        <About />
        <Projects />
        <TechStack />
        <Certificates />
        <Contact />
      </React.Fragment>
    </div>
  );
};
export default Home;
