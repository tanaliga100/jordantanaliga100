import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import OnboardingModal from "../pages/notice-page";
type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  useEffect(() => { 
    if (router.asPath === "/prohibited") {
      setVisible(false)
    }

  }, [router])


  const [visible, setVisible] = useState<boolean>(true)
   

  function handleCloseModal() {
      setVisible(false)
  }
 
  
 

  return (
    <main>
      {visible && 
        <OnboardingModal closeModal={handleCloseModal}  />
      }
      <Navbar />
      <Header />
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
