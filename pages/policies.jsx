import React from "react";
import Header from "./common/header";
import PoliciesItems from "./component/policies/policies_items";
import Footer from "./common/footer";
import HeadSeo from "./headSeo";

const policies = () => {
  return (
    <>
      <HeadSeo />

      <section className="bg-[url(/images/bg_terms.jpg)] bg-center bg-cover bg-no-repeat bg-fixed">
        <div>
          <div>
            <Header />
          </div>
          {/* policies items start */}
          <div>
            <PoliciesItems />
          </div>
          {/* policies items end */}
          <div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default policies;
