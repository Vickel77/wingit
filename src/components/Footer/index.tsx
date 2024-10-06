// Footer.js
import Image from "next/image";
import Link from "next/link";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white px-20 pt-20 pb-10  text-lg">
      <Image
        width={300}
        height={300}
        className=" absolute bottom-0 left-0 z-0 "
        alt="fruit frame"
        src="/img-wheat.png"
      />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Orangedrops</h5>
            <p className="text-sm py-2">
              Pioneering food production and health
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul className="text-sm">
              <li className="py-2">
                <Link href="/about">About</Link>
              </li>
              <li className="py-2">
                <Link href="/products">Products and Brands</Link>
              </li>
              <li className="py-2">
                <Link href="/contact">Team</Link>
              </li>
              <li className="py-2">
                <Link href="/privacy">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
            <ul className="text-sm">
              <li className="py-2">
                Email:{" "}
                <a href="mailto:the@man.com" className="hover:underline">
                  info@orangedrops.ng
                </a>
              </li>
              <li className="py-2">
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  0706 521 3416
                </a>
              </li>
              <li className="py-2">
                Address: Popoola street, 7, Mayowa Close, Ago palace way, Lagos
              </li>
              <li>
                <Socials />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            copyright &copy; {new Date().getFullYear().toString()} Orangedrops
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
