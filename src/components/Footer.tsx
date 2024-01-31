import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gradient-to-t from-[#1F2937] to-[#131923] py-10 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-4 lg:px-8">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <div className="space-y-2">
            <p>
              <FaPhone className="w-6 h-6 mr-2 inline-block" />
              +880 1953363167
            </p>
            <p>
              <FaEnvelope className="w-6 h-6 mr-2 inline-block" />
              info@cypheria71.com
            </p>
            <p>
              <FaEnvelope className="w-6 h-6 mr-2 inline-block" />
              Dhanmondi32, Dhaka, Khulna, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Subscribe to Newsletter</h2>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Your email"
              className="outline-none border-b-2 border-gray-500 w-[300px] bg-transparent text-white"
            />
            <img className="absolute right-0 top-3" src="img/paperPlane.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Follow Us</h2>
          <div className="flex gap-2 items-center">
            <Link to="#" className="text-white">
              <FaFacebook />
            </Link>
            <Link to="#" className="text-white">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-white">
              <FaLinkedin />
            </Link>
            <Link to="#" className="text-white">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white text-center py-2 mt-4">
        © 2023 | All rights reserved by Cypheria71
      </div>
    </footer>
  );
};

export default Footer;
