import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import TrialForm from "./component/freeTrial/trial_form";

const FreeTrial = () => {
  return (
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
  );
};

export default FreeTrial;
