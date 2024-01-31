import React from 'react';
import { FaWhatsapp, FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const ContactUs: React.FC = () => {
  const handleFormSuccess = () => {
    console.log('Form submitted successfully.');
    // You can add additional logic here if needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <div className="leading-[36px] md:leading-[45px] lg:leading-[72px] font-popp text-[36px] md:text-[45px] font-bold text-black lg:text-7xl m-6">
          <span className="outlined_font">CONTACT</span>
          <br />
          <span className="outlined_font">US</span>
        </div>
      </div>

      <div className="md:flex md:flex-row w-full">
        <ContactForm onSuccess={handleFormSuccess} />

        <div className="md:w-1/12 text-center text-black justify-center items-center m-2">
          <div className="h-1/2"></div>
          <div className="text-gray-500 mx-4">Or</div>
          <div className="border-t-2 border-gray-500 h-1/2 "></div>
        </div>

        <div className="md:w-1/2 text-black flex flex-col items-center">
          {[
            { icon: FaWhatsapp, text: 'Whatsapp', link: 'https://whatsapp-link' },
            { icon: FaTelegram, text: 'Telegram', link: 'https://telegram-link' },
            { icon: FaGithub, text: 'Github', link: 'https://github-link' },
            { icon: FaLinkedin, text: 'LinkedIn', link: 'https://linkedin-link' },
          ].map(({ icon: Icon, text, link }) => (
            <div
              key={text}
              className="border flex flex-row items-center border-spacing-2 border-slate-400 w-72 md:w-64 lg:w-96 h-14 p-4 m-2 rounded-md"
            >
              <Link to={link} target="_blank" rel="noopener noreferrer">
                <Icon className="text-4xl hover:text-gray-400 cursor-pointer" />
              </Link>
              <span className="ml-2">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
