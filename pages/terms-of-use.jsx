import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import Head from "next/head";
import TermsItems from "./component/terms-of-use/terms_items";

const TermsOfUse = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="images/favicon.png" type="image/png" />

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
      {/*  */}
      <section className="bg-[url(/images/bg_terms.jpg)] bg-center bg-cover bg-no-repeat bg-fixed">
        <div>
          <div>
            <Header />
          </div>
          {/* terms items start */}
          <TermsItems />
          {/* terms items end */}
          {/*  */}
          <div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
