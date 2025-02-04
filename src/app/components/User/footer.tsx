import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { APP_COLORS } from "../../config/config";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      {/* Left Panel (Red Section) */}
      <div
        className={`bg-red-600 text-white px-6 py-12 md:col-span-2`}
        style={{ backgroundColor: APP_COLORS.secondary }}
      >
        <h1 className="text-xl font-bold mb-4">Get in Touch with Us!</h1>
        <p className="text-sm leading-relaxed">
          At Lopeze's Art Studio, we're always excited to hear from you! Whether
          you're looking to collaborate, inquire about custom artworks, or
          simply share your thoughts, our team is here to help.
        </p>

        <div className="mt-6 space-y-4 px-6">
          <div className="flex items-center">
            <MdEmail className="mr-2" size={20} />
            <p className="text-sm">
              Email Us:{" "}
              <strong className="text-[13px]">
                lopenzeartstudioemail@example.com
              </strong>
            </p>
          </div>
          <div className="flex items-center">
            <IoCall className="mr-2" size={20} />
            <p className="text-sm">
              Call Us: <strong className="text-[13px]">09123456789</strong>
            </p>
          </div>
          <div className="flex items-center">
            <MdEmail className="mr-2" size={20} />
            <p className="text-sm">
              Visit Us:{" "}
              <strong className="text-[13px]">
                Lopez Quezon Province Philippines
              </strong>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center font-Montserrat mt-10 text-sm">
          <p>
            Are you a member or Admin?{" "}
            <NavLink
              to="/login"
              onClick={() => window.scrollTo(0, 0)}
              className="text-blue-400 font-Montserrat underline "
            >
              Click login
            </NavLink>
          </p>
        </div>
      </div>

      {/* Middle Panel (Black Section) */}
      <div className="bg-black text-white p-12 md:col-span-3 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-4 ">Our Socials!</h1>
          <p className="text-sm mt-2 leading-relaxed">
            Follow us on social media for the latest updates and artistic
            inspiration! Let’s create something beautiful together. Drop us a
            message, and we’ll get back to you as soon as possible.
          </p>
          <div className="flex space-x-6 mt-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter size={25} />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-bold">Be part of Lopenze</h1>
          <p className="text-sm mt-2">
            Step into a world of inspiration and artistic wonder at Lopeze Art
            Space Gallery. Explore stunning works by talented artists, celebrate
            creativity, and connect with a community that values the beauty of
            art.
          </p>
          <NavLink
            to="/guest"
            onClick={() => window.scrollTo(0, 0)}
            className="mt-4 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-all text-center block max-w-fit"
          >
            Be a Guest
          </NavLink>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex bg-black text-white w-full p-8 md:col-span-1">
        {" "}
        {/* Increased width of navigation section */}
        {/* Divider for the line */}
        <div className="w-0.5 bg-white"></div>
        <div className="flex justify-center items-center">
          {/* Navigation Section */}
          <div className="pl-10 flex-grow text-center">
            <h1 className="text-lg font-bold mb-6">Navigation</h1>
            <ul className="space-y-4 text-sm">
              <li>
                <NavLink
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:underline"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/exhibitionsPage"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:underline"
                >
                  Exhibitions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/featuredArtistPage"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:underline"
                >
                  Featured Artists
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allArtPage"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:underline"
                >
                  All Art
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
