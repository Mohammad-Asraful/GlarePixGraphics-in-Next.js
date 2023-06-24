import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="containers">
        <div className="bg-[#00C04B] py-20">
          <div className="container mx-auto">
            {/* icons start */}
            <div className="flex items-center justify-center gap-5">
              <Link
                href="https://www.facebook.com/glarepixgraphics"
                target="_blank">
                <img
                  className="w-10 h-10"
                  src="images/facebook.png"
                  alt="socials icons"
                />
              </Link>
              <Link href="https://twitter.com/PixGpg" target="_blank">
                <img
                  className="w-10 h-10"
                  src="images/twitter.png"
                  alt="socials icons"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/paul-halder-49156023b/"
                target="_blank">
                <img
                  className="w-10 h-10"
                  src="images/linkedin.png"
                  alt="socials icons"
                />
              </Link>
              <Link
                href="https://www.instagram.com/glarepixgraphics/"
                target="_blank">
                <img
                  className="w-10 h-10"
                  src="images/instagram.png"
                  alt="socials icons"
                />
              </Link>
              <Link
                href="https://join.skype.com/invite/vBCvGeEi5HwJ"
                target="_blank">
                <img
                  className="w-10 h-10"
                  src="images/skype.png"
                  alt="socials icons"
                />
              </Link>
            </div>
            {/* icons end */}

            {/* links start */}
            <div className="flex items-center justify-center gap-5 mt-5 text-white text-lg">
              <Link
                className="text-white hover:text-black"
                href="/terms-of-use">
                Terms of Use
              </Link>
              <Link className="text-white hover:text-black" href="/policies">
                Privacy Policies
              </Link>
              <Link className="text-white hover:text-black" href="/about">
                About Us
              </Link>
              <Link className="text-white hover:text-black" href="/contact">
                Contacts Us
              </Link>
            </div>
            {/* links end */}
          </div>
        </div>
      </div>
      {/* copy rights */}
      <div className="py-5 w-full text-center bg-gray-300 text-black">
        <p className="container mx-auto">
          &copy; 2022 All Rights Reserved By GPG Templates
        </p>
      </div>
    </section>
  );
};

export default Footer;
