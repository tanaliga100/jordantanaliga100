import React from "react";
import Head from "next/head";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <Head>
        <title>jordantanaliga100</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/JORDANTANALIGA100-modified.png"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  );
};

export default Header;
