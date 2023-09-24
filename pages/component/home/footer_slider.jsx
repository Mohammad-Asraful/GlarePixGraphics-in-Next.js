import { Card } from "flowbite-react";
import Head from "next/head";
import React from "react";
import Slider from "react-slick";

const FooterSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      {/* slider start */}
      <section>
        <div className="container mx-auto">
          <div className="px-7 lg:px-10 py-2">
            <Slider className="w-full" {...settings}>
              {/* USA */}
              <Card className="w-2/3 mx-auto bg-opacity-0 border-2">
                <div className="text-center">
                  <img
                    className="w-48 h-48 mx-auto"
                    src="images/client_country_slider/client-USA.png"
                  />
                  <h3 className="text-2xl font-bold mt-4 mb-2">H.ROBASTA</h3>
                  <h3 className="text-2xl font-semibold">United States</h3>
                </div>
                <p className="font-normal text-black text-xl">
                  “No doubt on their professionalism. Always try to provide
                  quality work. Transparent communication.”
                </p>
              </Card>
              {/* ENGLAND */}
              <Card className="w-2/3 mx-auto bg-opacity-0 border-2">
                <div className="text-center">
                  <img
                    className="w-48 h-48 mx-auto"
                    src="images/client_country_slider/client-EN.png"
                  />
                  <h3 className="text-2xl font-bold mt-4 mb-2">M.MATCRO</h3>
                  <h3 className="text-2xl font-semibold">ENGLAND</h3>
                </div>

                <p className="font-normal text-black text-xl">
                  “Provide fast delivery. Polite and prompt communication. Do
                  quality work.”
                </p>
              </Card>
              {/* SWEDEN */}
              <Card className="w-2/3 mx-auto bg-opacity-0 border-2">
                <div className="text-center">
                  <img
                    className="w-48 h-48 mx-auto"
                    src="images/client_country_slider/client-SW.png"
                  />
                  <h3 className="text-2xl font-bold mt-4 mb-2">GODWIN SILVA</h3>
                  <h3 className="text-2xl font-semibold">SWEDEN</h3>
                </div>
                <p className="font-normal text-black text-xl">
                  “Always Professional. Quick delivery and quality work with a
                  reasonable price.”
                </p>
              </Card>
              {/* AUS */}
              <Card className="w-2/3 mx-auto bg-opacity-0 border-2">
                <div className="text-center">
                  <img
                    className="w-48 h-48 mx-auto"
                    src="images/client_country_slider/client-AUS.png"
                  />
                  <h3 className="text-2xl font-bold mt-4 mb-2">FRANK RICKY</h3>
                  <h3 className="text-2xl font-semibold">AUSTRALIA</h3>
                </div>

                <p className="font-normal text-black text-xl">
                  FRANK RICKY“Glare Pix Graphics (GPG) team is Highly
                  Professional. They are very prompt in responding to any query.
                  Definitely a quality provider and recommend their services.”
                </p>
              </Card>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default FooterSlider;
