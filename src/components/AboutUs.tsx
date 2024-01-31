import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import about from '../assets/about4.jpg';
import Background from './Background';
import AboutContent from './AboutContent';

const AboutUs: React.FC = () => {
  const imageSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const descriptionSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <>
      <Background />
      <div className="min-h-screen">
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <animated.h2 style={titleSpring} className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              About Us
            </animated.h2>
            <animated.p style={descriptionSpring} className="text-gray-600 text-lg">
              Learn more about our company and values
            </animated.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <animated.div style={imageSpring} className="md:order-1">
              <img
                src={about}
                alt="Company Office"
                className="object-cover w-full h-96 md:h-full mx-auto rounded-md shadow-md"
              />
            </animated.div>
            <div className="md:order-2 flex flex-col justify-center items-center md:items-start p-6 bg-white rounded-md shadow-md">
              <animated.h3 style={titleSpring} className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                Imagine. Build. Succeed.
              </animated.h3>
              <animated.p style={descriptionSpring} className="text-gray-600 text-lg mb-4 text-center md:text-left">
                Founded in 2015, Cypheria71 is an innovative software development company that builds market-leading
                digital solutions.
              </animated.p>
              <animated.button
                style={descriptionSpring}
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md w-32 hover:bg-blue-600"
              >
                Click me
              </animated.button>
            </div>
          </div>

          <AboutContent />

          <div className="text-center mt-8">
            <animated.p style={descriptionSpring} className="text-gray-600">
              Ready to join us on this exciting journey?{' '}
              <a href="/contact-us" className="text-blue-500 hover:underline">
                Contact Us
              </a>
            </animated.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
