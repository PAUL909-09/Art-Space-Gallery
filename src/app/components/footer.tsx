import { APP_COLORS, APP_ROUTES } from "../config/config";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaMapPin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex-grow">{/* Your other content goes here */}</div>

      <div className="flex">
        {/* Left side - Red (40% width) */}
        <div
          className={`w-2/5 ${APP_COLORS.secondary} h-auto p-8 md:p-12 text-white`}
        >
          <h1 className="text-2xl font-bold">Get in Touch with Us!</h1>
          <p
            className="mt-2 font-sans font-semibold text-sm leading-loose font-montserrat"
            style={{ wordSpacing: "4px" }}
          >
            At Lopeze's Art Studio, we’re always excited to hear from you!
            Whether you’re looking to collaborate, inquire about custom
            artworks, or simply share your thoughts, our team is here to help.
          </p>

          <div className="flex flex-col justify-center ml-14 mt-8 space-y-4">
            <div className="flex space-x-2">
              <MdEmail size={20} />
              <p className="text-sm">
                Email us:{" "}
                <span className="font-bold">
                  lopenzeartstudioemail@example.com
                </span>
              </p>
            </div>
            <div className="flex space-x-2">
              <IoCall size={20} />
              <p className="text-sm">
                Call us: <span className="font-bold">09123456789</span>
              </p>
            </div>
            <div className="flex space-x-2">
              <FaMapPin size={20} />
              <p className="text-sm">
                Visit us:{" "}
                <span className="font-bold">
                  Lopez Quezon Province Philippines
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-x-4">
            <div className="px-4 py-2 border border-gray-300 rounded-md transition duration-300 ease-in-out hover:scale-105">
              <p className="text-sm font-bold">ABOUT US</p>
              <a
                href="/about"
                className="text-sm underline hover:text-blue-500"
              >
                Learn more about us
              </a>
            </div>
            <div className="px-4 py-2 border border-gray-300  rounded-md transition duration-300 ease-in-out hover:scale-105">
              <p className="text-sm font-bold">LOGIN</p>
              <Link
                to={APP_ROUTES.HAMBURGER.find((route) => route.path === "/logIn")?.path || "#"} // Use the path from APP_ROUTES
                className="text-sm underline hover:text-blue-500"
              >
                Click here to login
              </Link>
            </div>
          </div>
        </div>

        {/* Right side - Black (60% width) */}
        <div className="w-3/5 bg-black h-auto flex justify-center items-center space-x-4 text-white">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="text-center">
                <h1 className="text-sm font-bold">Navigation</h1>
              </div>
              <div className="text-center mt-5">
                <h1 className="text-sm font-Montserrat">HOME</h1>
              </div>
              <div className="text-center mt-5">
                <h1 className="text-sm font-Montserrat">EXHIBITIONS</h1>
              </div>
              <div className="text-center mt-5">
                <h1 className="text-sm font-Montserrat">FEATURED ARTISTS</h1>
              </div>

              <div className="text-center mt-5">
                <h1 className="text-sm font-Montserrat">ALL ART</h1>
              </div>
            </div>

            <p className="text-sm font-Montserrat m-0 text-center mt-16">
              Follow us on social media for the latest updates and artistic
              inspiration!
              <br />
              Let’s create something beautiful together. Drop us a message, and
              <br />
              we’ll get back to you as soon as possible.
            </p>

            <div className="flex space-x-4 gap-x-4 mt-9 mb-1">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
