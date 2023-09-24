import React from "react";
import Header from "./common/header";
import PriceItems from "./component/pricing/price_items";
import Footer from "./common/footer";
import HeadSeo from "./headSeo";

const Price = () => {
  return (
    <>
      <HeadSeo />

      <section>
        <div className="containers">
          <div>
            {/*  */}
            <Header />
            {/*  */}

            {/*  */}
            <PriceItems />
            {/*  */}

            {/*  */}
            <Footer />
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;

// <!-- portfolio section -->

//     <section class="portfolio_section layout_padding">
//       <div style="text-align: center">
//         {/* <!--<img src="images/price-table.png">--> */}
//         <div class="container">
//           <div
//             class="d-flex flex-column align-items-center"
//             style="margin-bottom: 45px">
//             <div class="custom_heading-container">
//               <h2 style="border-bottom: 1px black solid; color: green">
//                 OUR PRICING PLAN
//                 {/* <!--<img src="images/free-trail-green.png" alt="" height="60" width="300">--> */}
//               </h2>
//             </div>
//           </div>
//           <table
//             class="table table-bordered border-primary"
//             style="border: 1px solid #000000">
//             <thead>
//               <tr>
//                 <th style="border: 1px solid #000000">Categories</th>
//                 <th style="border: 1px solid #000000">Nature of work</th>
//                 <th style="border: 1px solid #000000">Price in Dollar</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td
//                   style="
//                     border: 1px solid #000000;
//                     vertical-align: middle;
//                     text-align: center;
//                   "
//                   rowspan="5">
//                   Clipping Path
//                 </td>
//                 <td style="border: 1px solid #000000">Basic</td>
//                 <td style="border: 1px solid #000000">$0.29</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Medium</td>
//                 <td style="border: 1px solid #000000">$0.50</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Advance</td>
//                 <td style="border: 1px solid #000000">$1</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Complex</td>
//                 <td style="border: 1px solid #000000">$3.5</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Super Complex</td>
//                 <td style="border: 1px solid #000000">$5</td>
//               </tr>
//               <tr>
//                 <td
//                   style="
//                     border: 1px solid #000000;
//                     vertical-align: middle;
//                     text-align: center;
//                   "
//                   rowspan="4">
//                   Multi Clipping Path
//                 </td>
//                 <td style="border: 1px solid #000000">Basic</td>
//                 <td style="border: 1px solid #000000">$0.80</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Medium</td>
//                 <td style="border: 1px solid #000000">$1.5</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Advance</td>
//                 <td style="border: 1px solid #000000">$4</td>
//               </tr>

//               <tr>
//                 <td style="border: 1px solid #000000">Complex</td>
//                 <td style="border: 1px solid #000000">$8</td>
//               </tr>
//               <tr>
//                 <td
//                   style="
//                     border: 1px solid #000000;
//                     vertical-align: middle;
//                     text-align: center;
//                   "
//                   rowspan="3">
//                   Photo Retouching
//                 </td>
//                 <td style="border: 1px solid #000000">Product Retouching</td>
//                 <td style="border: 1px solid #000000">$1</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Model Retouching</td>
//                 <td style="border: 1px solid #000000">$1.50</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Jewelry Retouching</td>
//                 <td style="border: 1px solid #000000">$6</td>
//               </tr>
//               <tr>
//                 <td
//                   style="
//                     border: 1px solid #000000;
//                     vertical-align: middle;
//                     text-align: center;
//                   "
//                   rowspan="3">
//                   Ghost Mannequin
//                 </td>
//                 <td style="border: 1px solid #000000">Basic</td>
//                 <td style="border: 1px solid #000000">$1</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Medium</td>
//                 <td style="border: 1px solid #000000">$1.5</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Symmetrical</td>
//                 <td style="border: 1px solid #000000">$3</td>
//               </tr>
//               <tr>
//                 <td
//                   style="
//                     border: 1px solid #000000;
//                     vertical-align: middle;
//                     text-align: center;
//                   "
//                   rowspan="3">
//                   Shadow Creation
//                 </td>
//                 <td style="border: 1px solid #000000">Natural Shadow</td>
//                 <td style="border: 1px solid #000000">$0.50</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Reflection Shadow</td>
//                 <td style="border: 1px solid #000000">$1</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Drop Shadow</td>
//                 <td style="border: 1px solid #000000">$1</td>
//               </tr>
//               <tr>
//                 <td
//                   style="
//                     border: 1px solid #000000;
//                     vertical-align: middle;
//                     text-align: center;
//                   "
//                   rowspan="3">
//                   Color Correction
//                 </td>
//                 <td style="border: 1px solid #000000">Basic</td>
//                 <td style="border: 1px solid #000000">$1</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Medium</td>
//                 <td style="border: 1px solid #000000">$2</td>
//               </tr>
//               <tr>
//                 <td style="border: 1px solid #000000">Advance</td>
//                 <td style="border: 1px solid #000000">$3</td>
//               </tr>
//             </tbody>
//           </table>
//           <div class="row">
//             <div class="col-sm-12">
//               <p>
//                 *All prices listed above are in US Dollars. Prices depends on
//                 amount of work and time needed for each images and are
//                 negotiable.
//               </p>
//             </div>
//             <div
//               class="col-sm-12"
//               style="margin-top: 50px; margin-bottom: -50px">
//               <div class="row">
//                 <div class="col-sm-3"></div>
//                 <div class="col-sm-2" style="margin-top: 10px">
//                   <h4>We Accept :</h4>
//                 </div>
//                 <div class="col-sm-2">
//                   <img
//                     src="images/payp.png"
//                     class="rounded"
//                     height="46px"
//                     width="142px" />
//                 </div>
//                 <div class="col-sm-2">
//                   <img
//                     src="images/n.png"
//                     class="rounded"
//                     height="64px"
//                     width="190px"
//                     style="margin-top: -7px" />
//                 </div>
//                 <div class="col-sm-2"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* <!-- */}
//   <section class="portfolio_section layout_padding">
//     <div class="container">
//       <h1 class="display-4 text-center mb-5">Our Pricing Plan</h1>
//       <p class="text-center">1. Clipping path starts -> $0.30 - $5 <br>
//         2. Multi clipping Path -> $0.90 - $8 <br> 3. Background Remove -> $0.70 - $5 <br> 4. Photo Retouching -> $1 -
//         $6.5 <br> 5. Invisible Ghost Mannequin -> $1 - $3 <br> 6. Shadow Creation Service -> $0.90 - $1.5</p>
//       <h6 class="display-5 text-center mb-5">The price depends on the detail of work and time and for better
//         understanding, few examples are shown below of different price ranges taking Background Remove as base work.
//       </h6>
//       <div>
//         <table border="3" align="center">
//           <tr>
//             <th>Categories</th>
//             <th>Price range</th>
//             <th></th>
//           </tr>
//           <tr>
//             <td>Clipping Path <br> Standard 24 hours</td>
//             <td>
//               <font size="2">
//                 Basic $0.30<br>
//                 Medium $0.60<br>
//                 Advance $1<br>
//                 Complex $3.5<br>
//                 Super Complex $5
//               </font>
//             </td>
//             <td><font size="2"></font></td>
//           </tr>
//           <tr>
//             <td>Multi Clipping Path</td>
//             <td>
//               <font size="2">
//                 Basic $0.90<br>
//                 Medium $1.80<br>
//                 Advance $4<br>
//                 Complex $8
//               </font>
//             </td>
//             <td><font size="2"></font></td>
//           </tr>
//           <tr>
//             <td>Photo Retouching</td>
//             <td>
//               <font size="2">
//                 Product Retouching $1<br>
//                 Model Retouching $ 1.90<br>
//                 Jewelry Retouching $ 6.5
//               </font>
//             </td>
//             <td><font size="2"></font></td>
//           </tr>
//           <tr>
//             <td>Invisible Ghost Mannequin</td>
//             <td>
//               <font size="2">
//                 Basic $1<br>
//                 Medium $1.5<br>
//                 Symmetrical $3
//               </font>
//             </td>
//             <td><font size="2"></font></td>
//           </tr>
//           <tr>
//             <td>Shadow Creation Service</td>
//             <td>
//               <font size="2">
//                 Natural Shadow $0.90<br>
//                 Reflection Shadow $ 1.2<br>
//                 Drop Shadow $ 1.5
//               </font>
//             </td>
//             <td><font size="2"></font></td>
//           </tr>
//           <tr>
//             <td>Shadow Creation Service</td>
//             <td>
//               <font size="2">
//                 Natural Shadow $0.90<br>
//                 Reflection Shadow $ 1.2<br>
//                 Drop Shadow $ 1.5
//               </font>
//             </td>
//             <td><font size="2"></font></td>
//           </tr>
//         </table>
//       </div>
//     </div>

//   </section>
// -->
//     {/* <!-- end portfolio section --> */}

//     {/* <!-- info section --> */}
//     <section class="info_section layout_padding">
//       <div class="container">
//         <div class="info_social">
//           <div>
//             <a
//               target="_blank"
//               href=" https://www.facebook.com/glarepixgraphics">
//               <img src="images/facebook.png" alt="" />
//             </a>
//           </div>
//           <div>
//             <a target="_blank" href="https://twitter.com/PixGpg">
//               <img src="images/twitter.png" alt="" />
//             </a>
//           </div>
//           <div>
//             <a
//               target="_blank"
//               href="https://www.linkedin.com/in/paul-halder-49156023b/">
//               <img src="images/linkedin.png" alt="" />
//             </a>
//           </div>
//           <div>
//             <a
//               target="_blank"
//               href="https://www.instagram.com/glarepixgraphics/">
//               <img src="images/instagram.png" alt="" />
//             </a>
//           </div>
//           <div>
//             <a
//               target="_blank"
//               href="https://join.skype.com/invite/vBCvGeEi5HwJ">
//               <img src="images/skype.png" alt="" />
//             </a>
//           </div>
//         </div>

//         <div>
//           <p>
//             <a href="terms-of-use.html" style="color: white"
//               >Terms of Use&emsp;</a
//             >
//             <a href="policies.html" style="color: white"
//               >Privacy policies&emsp;</a
//             >
//             <a href="about.html" style="color: white">About Us&emsp;</a>
//             <a href="contact.html" style="color: white">Contact Us&emsp;</a>
//           </p>
//         </div>
//       </div>
//     </section>

//     {/* <!-- end info_section --> */}

//     {/* <!-- footer section --> */}
//     <section class="container-fluid footer_section">
//       <p>
//         &copy; 2022 All Rights Reserved By
//         <a href="">GPG Templates</a>
//       </p>
//     </section>
//     {/* <!-- footer section --> */}
