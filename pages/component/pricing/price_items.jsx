import Head from "next/head";

const PriceItems = () => {
  return (
    <>
      <Head>
        {/* <!-- Basic --> */}
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="images/favicon.png" type="image/png" />

        {/* <!-- Mobile Metas --> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* <!-- Site Metas --> */}
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>GPG</title>
      </Head>

      <section className="py-20 bg-[#EEEEEE]">
        <div className="container mx-auto">
          <div className="px-0 lg:px-10">
            <h3 className="uppercase text-center underline underline-offset-4 text-green-500 text-2xl font-bold mb-5">
              Our Pricing Plan
            </h3>
            <table className="border border-black w-full text-center [&>thead>tr>th]:border [&>thead>tr>th]:border-black [&>thead>tr>th]:py-3 [&>tbody>tr>td]:border [&>tbody>tr>td]:border-black [&>tbody>tr>td]:py-3">
              <thead>
                <tr>
                  <th>Categories</th>
                  <th>Nature of work</th>
                  <th>Price in Dollar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="5">Clipping Path</td>
                  <td>Basic</td>
                  <td>$0.29</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>$0.50</td>
                </tr>
                <tr>
                  <td>Advance</td>
                  <td>$1</td>
                </tr>
                <tr>
                  <td>Complex</td>
                  <td>$3.5</td>
                </tr>
                <tr>
                  <td>Super Complex</td>
                  <td>$5</td>
                </tr>
                {/*  */}
                <tr>
                  <td rowSpan="4">Multi Clipping Path</td>
                  <td>Basic</td>
                  <td>$0.80</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>$1.5</td>
                </tr>
                <tr>
                  <td>Advance</td>
                  <td>$4</td>
                </tr>
                <tr>
                  <td>Complex</td>
                  <td>$8</td>
                </tr>
                {/*  */}
                <tr>
                  <td rowSpan="2">Photo Retouching</td>
                  <td>Product Retouching</td>
                  <td>$1</td>
                </tr>
                <tr>
                  <td>Model Retouching</td>
                  <td>$1.50</td>
                </tr>
                {/*  */}
                <tr>
                  <td rowSpan="3">Jewelry Retouching</td>
                  <td>Retouch</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>Advance Retouch</td>
                  <td>$8</td>
                </tr>
                <tr>
                  <td>Complex - High end Retouch</td>
                  <td>$12</td>
                </tr>
                {/*  */}
                <tr>
                  <td rowSpan="3">Ghost Mannequin</td>
                  <td>Basic</td>
                  <td>$1</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>$1.5</td>
                </tr>
                <tr>
                  <td>Symmetrical</td>
                  <td>$3</td>
                </tr>

                <tr>
                  <td rowSpan="3">Shadow Creation</td>
                  <td>Natural Shadow</td>
                  <td>$0.50</td>
                </tr>
                <tr>
                  <td>Reflection Shadow</td>
                  <td>$1</td>
                </tr>
                <tr>
                  <td>Drop Shadow</td>
                  <td>$1</td>
                </tr>
                {/*  */}
                <tr>
                  <td rowSpan="3">Color Correction</td>
                  <td>Basic</td>
                  <td>$1</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>$2</td>
                </tr>
                <tr>
                  <td>Advance</td>
                  <td>$3</td>
                </tr>
              </tbody>
            </table>
            {/*  */}
            <div>
              <p className="text-xl mt-5">
                *All prices listed above are in US Dollars. Prices depends on
                amount of work and time needed for each images and are
                negotiable.
              </p>
            </div>
            {/*  */}
            <div className="flex justify-center items-center gap-5 pt-20">
              <h2 className="text-3xl">We Accept: </h2>
              <img className="w-36 h-12" src="images/payp.png" alt="" />
              <img className="w-36 h-12" src="images/n.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceItems;
