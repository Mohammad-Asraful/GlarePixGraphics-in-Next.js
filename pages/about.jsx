import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";

const About = () => {
  return (
    <section className="bg-[url(/images/bg_terms.jpg)] bg-center bg-cover bg-no-repeat bg-fixed">
      <div>
        <div>
          {/* <!-- header section strats --> */}
          <Header />
          {/* <!-- end header section --> */}
        </div>

        {/* <!-- news section --> */}
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-end gap-2 mb-10">
            <hr className="h-[1.5px] w-64 bg-blue-600" />
            <h1 className="text-4xl font-bold">About Us:</h1>
          </div>

          <div className="mb-20">
            <p className="text-xl">
              The journey started with some expert graphic designers and image
              editors in 2017. Since then, the team is providing high-quality &
              cost-effective digital image editing services in the local market.
              Glare Pix Graphics has a team of expert graphic designers and
              image editors those who are experts in Photoshop and Illustrator
              image editing. After 5 years of hard-working, finally, Glare Pix
              Graphics (GPG) started to flourish on the global market in 2022.
              Glare Pix Graphics (GPG) is a specialist in image editing like
              Professional Clipping Path and Multi Path, Background Removal,
              Photo Retouching, Jewelry Image retouching, Ghost Mannequin,
              Shadow and Reflection Creation, Color Correction, Image masking,
              Image resizing and cropping, Image optimization for eCommerce
              website and other business. All the designers and image editors
              are patient with their work. The company’s QC team always
              maintains the quality of their work on a higher level. We the
              Glare Pix Graphics believe in quality work. We recognize that our
              clients exist because of the nature of our quality work.
              Therefore, we are constantly trying to understand the needs of our
              clients and try to enter into the discussion and ultimately
              provide excellent quality work at a reasonable price. We hope to
              retain your services by providing top-quality work and building
              good relations and gaining your trust through Quality work .
            </p>
          </div>

          <div>
            <div className="mb-5">
              <h2 className="text-[2.5rem] font-bold mb-1">Our Mission</h2>
              <p className="text-xl">
                Our mission is to lead the industry by delivering satisfaction.
                We believe in innovation, quality, and performance. We promise
                to growth, reliability, and satisfaction. Mission statement to
                build long term relationships with our customers and clients and
                provide exceptional customer services by pursuing business
                through innovation and advanced technology.
              </p>
            </div>
            {/*  */}
            <div className="mb-5">
              <h2 className="text-[2.5rem] font-bold mb-1">Our vision</h2>
              <p className="text-xl">
                Our vision is to make business easy for the clients by applying
                the latest innovations while designing solutions and ensuring
                maximum efficiency in delivering service to capture a 30% share
                of the international market. Purpose To be a leader in the photo
                editing company by providing Best Quality services, relationship
                and profitability. Vision to provide quality services that
                exceeds the expectations of our esteemed customers.
              </p>
            </div>
            {/*  */}
            <div className="mb-5">
              <h2 className="text-[2.5rem] font-bold mb-1">Our Passion</h2>
              <p className="text-xl">
                Our Passion is to constantly provide the highest quality of
                products for our clients, and respond to their needs rapidly and
                indicatively. To focus on these simple objectives is the key to
                our ongoing growth and success, and it is the basis of our
                client relationships.
              </p>
            </div>
            {/*  */}
          </div>
        </div>
        {/* <!-- end news section --> */}

        {/* <!-- footer section --> */}
        <Footer />
        {/* <!-- footer section --> */}
      </div>
    </section>
  );
};

export default About;
