import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import TrialForm from "./component/freeTrial/trial_form";
import HeadSeo from "./headSeo";

const FreeTrial = () => {
  return (
    <>
      <HeadSeo />

      <section>
        <div className="containers">
          <div>
            <Header />
            {/*  */}
            <TrialForm />
            {/*  */}
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrial;
