import Header from "./common/header";
import Hero from "./component/home/hero";
import HomeAbout from "./component/home/home-about";
import HomeService from "./component/home/home-service";
import HomeOurWorks from "./component/home/our_works";

import HeaderSlider from "./component/home/header_slider";
import FooterSlider from "./component/home/footer_slider";
import Footer from "./common/footer";
import HeadSeo from "./headSeo";

const Home = () => {
  return (
    <>
      <HeadSeo />
      {/*  */}
      <section className="bg-[url(/images/only_home_bg.jpg)] bg-center bg-cover bg-no-repeat bg-fixed">
        <div className="containers">
          <div>
            <Header />
            <Hero />
            <HeaderSlider />
            <HomeAbout />
            <HomeService />
            <HomeOurWorks />
            <FooterSlider />
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
