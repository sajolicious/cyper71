// AboutUs.tsx
import React from 'react';
import about from '../assets/about1.jpg';
import Background from './Background';
import AboutContent from './AboutContent';
const AboutUs: React.FC = () => {
  return (
    <>
      <Background />
      <div className="bg-gray-100 py-16 min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-gray-800 m-8">About Us</h2>
            <p className="text-gray-600 mt-2 text-lg">Learn more about our company and values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center md:items-start items-center p-8 ">
              <h3 className="text-6xl font-semibold text-gray-800 mb-4 ">Imagine. Build. Succeed.</h3>
              <p className="text-gray-600 text-lg mb-2 text-center md:text-left mx-auto">
                Founded in 2015, Cypheria71 is an innovative software development company that builds market-leading digital solutions.
              </p>
              <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md w-32">
                Click me
              </button>
            </div>
            <div className="mb-8 md:mb-0">
              <img
                src={about}
                alt="Company Office"
                className="rounded-md border border-gray-300 object-cover w-full md:w-96 h-96 md:h-full mx-auto"
              />
            </div>
          </div>
        <AboutContent/>
         
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Ready to join us on this exciting journey?{' '}
              <a href="/contact-us" className="text-blue-500 hover:underline">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
