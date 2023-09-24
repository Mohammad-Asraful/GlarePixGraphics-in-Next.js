import Head from "next/head";
import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import ContactForms from "./component/contact/contact_forms";
import HeadSeo from "./headSeo";

const Contact = () => {
  return (
    <>
      <HeadSeo />

      <section>
        <div className="containers">
          <div>
            <Header />
            {/*  */}
            <ContactForms />
            {/*  */}
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
