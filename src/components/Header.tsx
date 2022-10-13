import React from "react";
import Head from "next/head";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Jordan Tanaliga | Personal Portfolio</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/JORDANTANALIGA100-modified.png"
        ></link>
        <meta name="viewport" content="Jordan Tanaliga Portfolio, A Front-End Web Developer. 
        I use React.js as my main stack" 
        width="device-width" />
      </Head>
    </div>
  );
};

export default Header;
