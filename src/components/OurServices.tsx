import React from 'react';
import team1 from '../assets/backend1.jpg';
import team2 from '../assets/uiux2.jpg';
import team3 from '../assets/backend2.jpg';
import team4 from '../assets/frontend.jpg';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
interface Service {
  title: string;
  description: string;
  image: string;
}



const OurServices: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Full Stack Web Development',
      description: 'Concise description of Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: team1,
    },
    {
      title: 'UI/UX',
      description: 'Concise description of Service 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: team2,
    },
    {
      title: 'Frontend Development',
      description: 'Concise description of Service 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: team4,
    },
    {
      title: 'Backend Development',
      description: 'Concise description of Service 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: team3,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-16">
      <div className="col-span-full text-center">
        <div className="leading-[36px] md:leading-[45px] lg:leading-[72px] font-popp text-[36px] md:text-[45px] font-bold text-black lg:text-6xl m-6">
          <span className="outlined_font">OUR</span>
          <br />
          <span className="outlined_font">SERVICES</span>
        </div>
      </div>

      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}

      <div className="col-span-full text-right">
        <button className="text-gray-600 hover:text-gray-400 transition-colors duration-300 ease-in-out">
          <Link to="/project-portfolio">See More</Link>
        </button>
      </div>
    </div>
  );
};

export default OurServices;
