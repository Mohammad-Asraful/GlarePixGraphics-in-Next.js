import Head from "next/head";
import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import ServiceItems from "./component/service/services_items";

const Service = () => {
  return (
    <>
      <Head>
        {/* <!-- Basic --> */}
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

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

      <section className="bg-[url(/images/only_home_bg.jpg)] bg-center bg-cover bg-no-repeat bg-fixed">
        <div className="containers">
          <div>
            {/* header part start */}
            <Header />
            {/* header part end */}

            {/* services start */}
            <ServiceItems />
            {/* services end */}

            {/* footer part start */}
            <Footer />
            {/* footer part end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
