import type { NextPage } from "next";
import React from "react";
import "tailwindcss/tailwind.css";

// COMPONENTS IMPORTS
import About from "../components/About";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
// NEXT IMPORTS
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
