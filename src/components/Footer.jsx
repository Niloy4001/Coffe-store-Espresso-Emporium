import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import logo from '../assets/more/logo1.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-10 relative ">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 md:space-x-20">
          {/* Left Section */}
          <footer className="bg-gray-100  p-10">
            {/* Logo and Description */}
            <div >
              <img
                src={logo} 
                alt="Logo"
                className=" w-16 h-16 mb-4"
              />
              <h3 className="text-2xl font-semibold text-brown-800 text-left font-rancho">
                Espresso Emporium
              </h3>
              <p className="text-sm mt-2 text-gray-600 text-left">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments to share with your best companion.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start space-x-4 mt-6">
              <a
                href="#"
                className="text-xl text-brown-600 hover:text-brown-800"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-xl text-brown-600 hover:text-brown-800"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-xl text-brown-600 hover:text-brown-800"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-xl text-brown-600 hover:text-brown-800"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Contact Information */}
            <div className=" mt-8">
              <h4 className="text-xl font-medium text-brown-800 text-left font-rancho">
                Get in Touch
              </h4>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                <li className="flex items-center space-x-2">
                  <FiPhone /> <span>+88 01533 333 333</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiMail /> <span>info@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiMapPin /> <span>72, Wall Street, King Road, Dhaka</span>
                </li>
              </ul>
            </div>
          </footer>

          {/* Right Section */}
          <div className="text-center">
            <h4 className="text-xl font-medium text-brown-800">
              Connect with Us
            </h4>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-brown-600 text-white px-6 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500">
          Copyright © Espresso Emporium | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
