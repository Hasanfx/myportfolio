import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="bg-black text-white py-10 px-5 h-auto  ">
      <div className="container  grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {/* Left Section: Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Info</h2>
          <p className="text-gray-400">
            Feel free to reach out to me through any of the platforms below.
          </p>
          <div>
            <p className="font-medium">Email:</p>
            <a
              href="mailto:hasan.gh231@gmail.com"
              className="text-gray-300 hover:text-blue-500"
            >
              hasan.gh231@gmail.com
            </a>
          </div>
          <div>
            <p className="font-medium">Phone:</p>
            <a
              href="" 
              className="text-gray-300 hover:text-blue-500"
            >
              +967 771491771
            </a>
          </div>
          <div>
            <p className="font-medium">Socials:</p>
            <div className="flex space-x-4 mt-2">

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Hasanfx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form className="">
            <div>
              <label htmlFor="name" className="block text-xs font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-1 px-4 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-5 text-left text-sm text-gray-400">
        © {new Date().getFullYear()} Hasan's Portofolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
