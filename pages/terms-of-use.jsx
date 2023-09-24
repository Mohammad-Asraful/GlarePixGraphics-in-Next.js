import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import Head from "next/head";
import TermsItems from "./component/terms-of-use/terms_items";
import HeadSeo from "./headSeo";

const TermsOfUse = () => {
  return (
    <>
      <HeadSeo />
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
