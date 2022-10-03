import React, { Children } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      {/* <Navbar />
      <Header />
      <Main />
      <About />
      <TechStack />
      <Projects />
      <Certificates />
      <Contact />
      <Footer /> */}
    </React.Fragment>
  );
};
export default Layout;
