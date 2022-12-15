import React, { Children } from "react";
import About from "../components/About";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
