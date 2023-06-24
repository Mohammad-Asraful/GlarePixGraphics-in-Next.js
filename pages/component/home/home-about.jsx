import Link from "next/link";

const HomeAbout = () => {
  return (
    <section>
      <div className="py-20">
        <div className="flex justify-around items-center gap-5">
          {/* text side start */}
          <div className="w-1/2">
            <h1 className="text-black text-5xl mb-3">About Us</h1>
            {/*  */}
            <div className="flex items-center gap-2 mb-10">
              <h3 className="text-black text-xl font-bold">
                GLARE PIX GRAPHICS (GPG)
              </h3>
              <hr className="bg-blue-700 border-none w-1/2 h-[1px]" />
            </div>
            {/*  */}
            <p className="text-black text-lg mb-10">
              Glare Pix Graphics (GPG) is a team of expert graphic designers and
              image editors. The team is a specialist in image post-production,
              Such as Professional Clipping Path and Multi Path, Background
              Removal, Photo Retouching, Jewelry Image retouching, Ghost
              Mannequin, Shadow and Reflection Creation, Color Correction, Image
              masking, Image resizing and cropping, Image optimization for
              eCommerce website and other business. The company’s main focus is
              to help clients by minimizing time and cost and maximizing their
              profit.
            </p>
            {/*  */}
            <div>
              <Link
                className="text-white bg-black rounded-full px-5 py-2"
                href="/about">
                Read More
              </Link>
            </div>
          </div>
          {/* text side end */}

          {/* image side start */}
          <div>
            <img
              className="w-full h-52 sm:h-72"
              src="images/contact.png"
              alt=""
            />
          </div>
          {/* image side end */}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
