import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { getImageUrl } from "../../utils/GetImage";

const Footer = () => {
  return (
    <footer className="h-auto bg-brand-yellow px-5 sm:px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 text-white border-b-2 gap-14">
        <div className="space-y-4">
          <h1 className="uppercase font-bold text-2xl">Zcoder Caffee</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            deleniti inventore in saepe modi aperiam enim nulla hic similique
            eius?
          </p>
          <address className="not-italic space-y-2">
            <p className="flex gap-3 items-center">
              <FaPhone />
              +22371907048
            </p>
            <p className="flex gap-3 items-center">
              <FaMapLocation />
              Bamako, Mali
            </p>
          </address>
        </div>

        <div className="space-y-4">
          <h1 className="font-bold text-2xl">Quick Links</h1>
          <div className="flex flex-col gap-2">
            {[
              "Home",
              "About",
              "Contact",
              "Search Fruits",
              "Privacy Policy",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:underline transition duration-300">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-bold text-2xl">Follow Us</h1>
          <div className="flex items-center text-2xl gap-5">
            <FaFacebook className="hover:text-black transition" />
            <FaTwitter className="hover:text-black transition" />
            <FaInstagram className="hover:text-black transition" />
            <FaTelegram className="hover:text-black transition" />
          </div>

          <div>
            <h2>We Accept</h2>
            <div className="h-[50px] overflow-clip">
              <img
                src={getImageUrl("Payments.png")}
                alt="Supported payment methods"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm py-4 text-white font-bold text-center">
        &copy; {new Date().getFullYear()} Zcoder Caffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
