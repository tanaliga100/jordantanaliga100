import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
   
    <div className="bg-center bg-gradient-to-tl from-slate-900 to-black/100 w-full h-full">
      <Layout>
        <Component {...pageProps} />     
      </Layout>
    </div>
  );
}

export default MyApp;