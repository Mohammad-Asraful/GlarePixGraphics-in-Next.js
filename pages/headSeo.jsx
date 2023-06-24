import Head from "next/head";
import React from "react";

const HeadSeo = () => {
  return (
    <>
      <Head>
        {/* <!-- Basic --> */}
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="favicon.ico" type="image/png" />

        {/* <!-- Mobile Metas --> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <!-- Site Metas --> */}
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>GPG</title>
      </Head>
    </>
  );
};

export default HeadSeo;
