import React from "react";
import Head from "next/head";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Jordan Tanaliga</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  );
};

export default Header;
