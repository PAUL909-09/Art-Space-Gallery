import React from "react";
import { APP_COLORS } from "../config/config";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{/* Your other content goes here */}</div>

      <div className="flex">
        {/* Left side - Red (40% width) */}
        <div
          className={`w-2/5 ${APP_COLORS.secondary} h-auto p-8 md:p-12 text-white`}
        >
          <h1 className="text-2xl font-bold">Get in Touch with Us!</h1>
          <p
            className="mt-2 font-semibold text-sm leading-loose"
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
        </div>

        {/* Right side - Black (60% width) */}
        <div className="w-3/5 bg-black h-auto"></div>
      </div>
    </div>
  );
};

export default Footer;
