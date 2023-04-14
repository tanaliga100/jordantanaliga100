import Head from "next/head";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Jordan Tanaliga | FullStack Developer</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/JORDANTANALIGA100-modified.png"
        ></link>
        <meta
          name="description"
          content="Jordan Pascual Tanaliga | Portfolio | Full Stack Web Developer |
        I use React.js as my main stack in application development in combination with Node.js/Express Framework as backend"
        />
      </Head>
    </div>
  );
};

export default Header;
