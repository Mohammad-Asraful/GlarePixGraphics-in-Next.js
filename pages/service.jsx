import Head from "next/head";
import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import ServiceItems from "./component/service/services_items";
import HeadSeo from "./headSeo";

const Service = () => {
  return (
    <>
      <HeadSeo />

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
