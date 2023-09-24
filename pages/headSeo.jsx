import Head from "next/head";

const HeadSeo = () => {
  return (
    <>
      <Head>
        {/* <!-- Basic --> */}
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* <link rel="icon" href="favicon.ico" type="image/png" /> */}

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

        {/* <!-- Mobile Metas --> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <!-- Site Metas --> */}
        <meta
          name="keywords"
          content="glarepixgraphics, Glare pix grapics, graphics designer, graphics design, clipping path, background removal, product design"
        />
        <meta
          name="description"
          content="this website is for a graphics porfolio and get order various kind of graphics designable products"
        />
        <meta name="author" content="glare pix graphics" />

        <title>GPG</title>
      </Head>
    </>
  );
};

export default HeadSeo;
