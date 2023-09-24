import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import { TopCarouselSlider } from "./product_image";

const HeaderSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
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
      <section className="bg-slate-900">
        <div className="container mx-auto">
          <div className="px-7 py-2">
            <Slider className="w-full" {...settings}>
              {TopCarouselSlider.map((data, i) => {
                return (
                  <div key={i} className="w-full">
                    <img className="w-full" src={data.imgSrc} alt={data.alt} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeaderSlider;
