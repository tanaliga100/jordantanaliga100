import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
