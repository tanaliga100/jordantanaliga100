import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
   
    <div className="bg-center 
    bg-cover bg-gradient-to-tl from-slate-900 via-20% via-gray-900 via-80% to-black to-90% 
    scroll-smooth
    w-full h-full">
      <Layout>
        <Component {...pageProps} />     
      </Layout>
    </div>
  );
}
export default MyApp;
