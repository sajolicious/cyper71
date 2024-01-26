import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import aboutImage from '../assets/about.png'

const AboutUsScreen: React.FC = () => {
  const [leftContentInView, setLeftContentInView] = useState(false)
  const [rightContentInView, setRightContentInView] = useState(false)

  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === leftContentRef.current) {
          setLeftContentInView(entry.isIntersecting)
        } else if (entry.target === rightContentRef.current) {
          setRightContentInView(entry.isIntersecting)
        }
      })
    }

    const options: IntersectionObserverInit = {
      threshold: 0.4,
    }

    const observer = new IntersectionObserver(handleIntersection, options)
    if (leftContentRef.current) observer.observe(leftContentRef.current)
    if (rightContentRef.current) observer.observe(rightContentRef.current)

    return () => {
      observer.disconnect()
    }
  }, [leftContentRef, rightContentRef])

  const leftContentAnimation = useSpring({
    opacity: leftContentInView ? 1 : 0,
    marginLeft: leftContentInView ? 0 : -100,
    transform: leftContentInView ? 'translateY(0)' : 'translateY(20px)',
    config: config.gentle,
  })

  const rightContentAnimation = useSpring({
    opacity: rightContentInView ? 1 : 0,
    marginLeft: rightContentInView ? 0 : -100,
    transform: rightContentInView ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 170, friction: 100 },
  })

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <animated.div
        ref={rightContentRef}
        style={rightContentAnimation}
        className="flex items-center justify-center w-1/3 right-content"
      >
        <img src={aboutImage} alt="About" className="object-cover rounded-lg filter invert" />
      </animated.div>
      <animated.div
        ref={leftContentRef}
        style={leftContentAnimation}
        className="flex flex-col justify-center w-1/2 mr-10 text-black left-content"
      >
        <span>About Cypheria71</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-left mb-6">
          Digital transformation and product development company based in Montreal
        </h1>
        <p className="text-lg text-center xl:text-base xl:text-left mb-4 font-mono">
          Our mission is to provide your organization with a comprehensive toolset of product development solutions. We
          leverage the latest technologies and ecosystems available in today's fast-moving market to build complete new
          ventures and technology-based acquisition channels for our enterprise and startup customers. We automate your
          business processes, connect your systems, and assemble tools for you and your team so that you can focus on
          solving the most important problems. We believe that an elegant solution alone does not guarantee a successful
          business, which is why our advice goes beyond technological strategy. We also cover marketing, business
          models, and much more. All of this is built with your culture and the resources at your disposal in mind.
        </p>
      </animated.div>
    </div>
  )
}

export default AboutUsScreen
