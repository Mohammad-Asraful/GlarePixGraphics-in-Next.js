import React from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import HeadSeo from "../headSeo";
const Header = () => {
  return (
    <>
      <HeadSeo />
      <header className="sticky w-full top-0 z-50">
        {/* <!-- header section strats --> */}
        <Navbar
          style={{
            backgroundColor: "#15D655",
            border: "none",
            padding: "15px",
          }}
          fluid
          rounded>
          <Navbar.Brand href="/">
            <img
              alt="Glare pix graphics Logo"
              className="mr-3 h-6 sm:h-14"
              src="images/logo-small.png"
            />
            <span className="self-center whitespace-nowrap text-sm sm:text-xl font-bold text-white">
              GLARE PIX GRAPHICS
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link
              className="uppercase font-bold py-3 md:px-2 text-white hover:text-black"
              href="/">
              Home
            </Link>
            <Link
              className="uppercase font-bold py-3 md:px-2 text-white hover:text-black"
              href="/service">
              Services
            </Link>
            <Link
              className="uppercase font-bold py-3 md:px-2 text-white hover:text-black"
              href="/prices">
              Pricing
            </Link>
            <Link
              className="uppercase font-bold py-3 md:px-2 text-white hover:text-black"
              href="/free_trial">
              Free Trials
            </Link>
            <Link
              className="uppercase font-bold py-3 md:px-2 text-white hover:text-black"
              href="/contact">
              Contact Us
            </Link>
          </Navbar.Collapse>
        </Navbar>

        {/* <!-- end header section --> */}
      </header>
    </>
  );
};

export default Header;
