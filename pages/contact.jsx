import Head from "next/head";
import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import ContactForms from "./component/contact/contact_forms";

const Contact = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="images/favicon.png" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>GPG</title>
      </Head>

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
