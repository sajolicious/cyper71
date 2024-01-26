import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import team1 from '../assets/DMarketing.png'
import team3 from '../assets/digitalMarketing.jpeg'
import { Link } from 'react-router-dom'
const ServiceCard: React.FC<{ title: string; description: string; image: string }> = ({
  title,
  description,
  image,
}) => {
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 20 },
  })

  return (
    <animated.div
      style={cardAnimation}
      className="p-8 m-2 rounded-lg h-full border border-gray-300 shadow-md hover:shadow-lg  transition-all duration-300 ease-in-out"
    >
      <div className="aspect-w-4 aspect-h-3 mb-4">
        <img src={image} alt={title} className="rounded-md object-cover w-full h-full" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </animated.div>
  )
}

const OurServices: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 md:p-16 ">
        <div className="col-span-full text-center">
          <h2 className="text-6xl font-bold text-gray-900 mb-10">Our Services</h2>
        </div>

        <ServiceCard
          title="Full Stack Web Development"
          description="Concise description of Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={team1}
        />
        <ServiceCard
          title="UI/UX"
          description="Concise description of Service 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={team1}
        />
        <ServiceCard
          title="Api Creation"
          description="Concise description of Service 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={team3}
        />

        <div className="col-span-full text-right">
          <button className="text-gray-600 hover:text-gray-400 transition-colors duration-300 ease-in-out">
            <Link to="/project-portfolio">See More</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default OurServices
