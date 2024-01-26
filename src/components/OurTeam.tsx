import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import team1 from '../assets/team1.webp'
import team2 from '../assets/team2.webp'
import team3 from '../assets/team3.webp'

const teamMembers = [
  { name: 'John Doe', role: 'CEO', image: team1 },
  { name: 'Jane Smith', role: 'CTO', image: team2 },
  { name: 'Bob Johnson', role: 'Lead Developer', image: team3 },
  // Add more team members as needed
]

const TeamCarousel: React.FC = () => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))

  const { x } = useSpring({
    x: -index * 100,
    config: { mass: 1, tension: 280, friction: 30 },
  })

  return (
    <div className="bg-gray-100 py-16 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Team</h2>
        <div className="relative w-full h-full overflow-hidden">
          <animated.div
            style={{
              display: 'flex',
              width: `${teamMembers.length * 100}%`,
              transform: x.to((val) => `translate3d(${val}%,0,0)`),
            }}
          >
            {teamMembers.map((member, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="relative h-60 overflow-hidden mb-4 rounded-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </animated.div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TeamCarousel
