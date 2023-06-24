import ClippingPath, {
  BackgroundRemoval,
  PhotoJewelryRetouch,
  GhostMannequinSymmetric,
  ColorCorrection,
} from "./product_image";

const HomeOurWorks = () => {
  return (
    <section>
      <div className="container mx-auto px-0 py-10 xl:px-10">
        <div>
          {/* heading start */}
          <div className="mb-20 flex items-center gap-2">
            <h1 className="text-black text-5xl">Our Works</h1>
            <hr className="w-40 h-[2px] border-none bg-blue-600" />
          </div>
          {/* heading end */}

          {/* clipping path start */}
          <div>
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold underline mb-10 underline-offset-[12px]">
              Clipping Path
            </h1>
            {/* images start */}
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-5">
              {ClippingPath.map((data, i) => {
                return (
                  <div key={i}>
                    <img src={data.imgSrc} alt={data.alt} />
                  </div>
                );
              })}
            </div>
            {/* images end */}
          </div>
          {/* clipping path end */}

          {/* Backgorund Removal start */}
          <div>
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold underline mb-10 mt-10 underline-offset-[12px]">
              Background Removal
            </h1>
            {/* images start */}
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-5">
              {BackgroundRemoval.map((data, i) => {
                return (
                  <div key={i}>
                    <img src={data.imgSrc} alt={data.alt} />
                  </div>
                );
              })}
            </div>
            {/* images end */}
          </div>
          {/* Backgorund Removal end */}

          {/* Photo & Jewelry Retouch start */}
          <div>
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold underline mb-10 mt-10 underline-offset-[12px]">
              Photo & Jewelry Retouch
            </h1>
            {/* images start */}
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-5">
              {PhotoJewelryRetouch.map((data, i) => {
                return (
                  <div key={i}>
                    <img src={data.imgSrc} alt={data.alt} />
                  </div>
                );
              })}
            </div>
            {/* images end */}
          </div>
          {/* Photo & Jewelry Retouch end */}

          {/* Ghost Mannequin / Symmetric start */}
          <div>
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold underline mb-10 mt-10 underline-offset-[12px]">
              Ghost Mannequin / Symmetric
            </h1>
            {/* images start */}
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-5">
              {GhostMannequinSymmetric.map((data, i) => {
                return (
                  <div key={i}>
                    <img src={data.imgSrc} alt={data.alt} />
                  </div>
                );
              })}
            </div>
            {/* images end */}
          </div>
          {/* Ghost Mannequin / Symmetric end */}

          {/* Color Correction start */}
          <div>
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold underline mb-10 mt-10 underline-offset-[12px]">
              Color Correction
            </h1>
            {/* images start */}
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5">
              {ColorCorrection.map((data, i) => {
                return (
                  <div key={i}>
                    <img src={data.imgSrc} alt={data.alt} />
                  </div>
                );
              })}
            </div>
            {/* images end */}
          </div>
          {/* Color Correction end */}
        </div>
      </div>
    </section>
  );
};

export default HomeOurWorks;
