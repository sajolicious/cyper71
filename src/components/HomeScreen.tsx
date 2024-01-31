import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'
import TechnologySection from './OurTechnologies'
import OurServices from './OurServices'
import ContactUs from './ContackUs'

const Home: React.FC = () => {
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1500 }, // Adjust the duration here
  })

  const textSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1500 }, // Adjust the duration here
  })

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1500 }, // Adjust the duration here
  })

  const svgSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
  })

  return (
    <>
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={svgSpring}
        className="absolute bottom-0 w-full"
        fill="#662983" // Set the fill color
        fillOpacity="0.7" // Set the fill opacity
        stroke="none" // Remove stroke
      >
        <path d="M0,96L80,101.3C160,103,320,112,480,128C640,139,800,149,960,154.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </animated.svg>

      <div className="flex flex-col h-screen w-full items-center justify-center relative">
        <animated.div style={titleSpring} className="text-black  text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            We Design and Develop <br />
            <span className="text-[#662983]">Innovative Products</span> <br />
            for Businesses and Startups
          </h1>
        </animated.div>

        <animated.div style={textSpring} className="text-base md:text-lg lg:text-xl text-center mb-4 font-serif z-10">
          <p>
            At Cypheria71, we specialize in designing and developing innovative products for businesses and startups.
          </p>
          <p>
            As a digital transformation and product development consulting firm, our core expertise lies in marketing,
            design, sales, and software development.
          </p>
        </animated.div>

        <animated.button
          style={buttonSpring}
          className="bg-[#662983] hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-full  z-10"
        >
          <Link to="./contact-us">start now</Link>
        </animated.button>
      </div>

      <TechnologySection />
      <OurServices />
      <ContactUs />
    </>
  )
}

export default Home
