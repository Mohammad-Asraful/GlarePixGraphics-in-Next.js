import Link from "next/link";
import React from "react";

const HomeService = () => {
  return (
    <section className="bg-[#020057]">
      <div className="containers px-10 py-20">
        <div>
          {/* text start */}
          <div className="text-right text-white mb-20">
            <div className="flex items-center justify-end gap-3">
              <hr className="bg-white border-none w-60 h-px" />
              <h3 className="uppercase font-bold text-xl">Service</h3>
            </div>
            <p className="capitalize">Our service offerings</p>
          </div>
          {/* text end */}

          {/* image cards start */}
          <div className="flex flex-wrap justify-center gap-5">
            {/* 1 */}
            <div>
              <div className="w-44 h-44 bg-white flex items-center justify-center">
                <img
                  className="w-20"
                  src="images/s-1.jpg"
                  alt="clipping path"
                />
              </div>
              <p className="text-white uppercase text-center mt-3 w-44">
                CLIPPING PATH
              </p>
            </div>
            {/* 2 */}
            <div>
              <div className="w-44 h-44 bg-white flex items-center justify-center">
                <img
                  className="w-20"
                  src="images/s-2.jpg"
                  alt="clipping path"
                />
              </div>
              <p className="text-white uppercase text-center mt-3 w-44">
                PHOTO RETOUCHING
              </p>
            </div>
            {/* 3 */}
            <div>
              <div className="w-44 h-44 bg-white flex items-center justify-center">
                <img
                  className="w-20"
                  src="images/s-3.jpg"
                  alt="clipping path"
                />
              </div>
              <p className="text-white uppercase text-center mt-3 w-44">
                INVISIBLE GHOST MANNEQUIN
              </p>
            </div>
            {/* 4 */}
            <div>
              <div className="w-44 h-44 bg-white flex items-center justify-center">
                <img
                  className="w-20"
                  src="images/s-4.jpg"
                  alt="clipping path"
                />
              </div>
              <p className="text-white uppercase text-center mt-3 w-44">
                SHADOW CREATION
              </p>
            </div>
            {/* 5 */}
            <div>
              <div className="w-44 h-44 bg-white flex items-center justify-center">
                <img
                  className="w-20"
                  src="images/s-5.png"
                  alt="clipping path"
                />
              </div>
              <p className="text-white uppercase text-center mt-3 w-44">
                COLOR CORRECTION
              </p>
            </div>
            {/*  */}
          </div>
          {/* image cards end */}

          <div className="mt-20">
            <Link
              className="text-white bg-black rounded-full px-5 py-2"
              href="/service">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
