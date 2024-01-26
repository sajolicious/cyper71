import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { v4 as uuidv4 } from 'uuid'

interface ParticleProps {
  size: number
  color: string
  left: number
  top: number
  type: string
  id: string
}

const Particle: React.FC<ParticleProps> = ({ size, color, left, top, type, id }) => {
  const particleSpring = useSpring({
    from: { opacity: 0.35, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)', config: { ...config.default, tension: 50, friction: 10 } },
    reset: true,
  })

  return (
    <animated.div
      style={{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: type === 'bubble' ? '50%' : '50%',
        backgroundColor: color,
        boxShadow:
          type === 'bubble'
            ? `0 5px 15px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
                color.slice(5, 7),
                16,
              )}, 0.3)`
            : 'none',
        ...particleSpring,
        left: `${left}px`,
        top: `${top}px`,
      }}
      key={id}
    />
  )
}

const BubbleBackground: React.FC = () => {
  const [particles, setParticles] = useState<React.ReactNode[]>([])
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createParticle = (type: string) => {
      const size = type === 'bubble' ? Math.floor(Math.random() * 130) + 20 : Math.floor(Math.random() * 30) + 10
      const color = generateRandomColor()
      const left = Math.random() * window.innerWidth
      const top = -size
      const id = uuidv4()

      const newParticle = <Particle key={id} size={size} color={color} left={left} top={top} type={type} id={id} />

      setParticles((prevParticles) => [...prevParticles, newParticle])
    }

    const animateParticles = () => {
      setParticles((prevParticles) => {
        const updatedParticles = prevParticles.map((particle) => {
          const top =
            typeof particle === 'object' && particle !== null && 'props' in particle
              ? parseFloat(particle.props.top as string) + (particle.props.type === 'bubble' ? 3 : 5) // Increase the speed
              : 0

          return React.cloneElement(particle as React.ReactElement, { top })
        })

        const visibleParticles = updatedParticles.filter((particle) =>
          typeof particle === 'object' && particle !== null && 'props' in particle
            ? parseFloat(particle.props.top as string) < window.innerHeight
            : false,
        )

        if (Math.random() < 0.3 - visibleParticles.length / 100) {
          createParticle('bubble')
        }

        if (Math.random() < 0.2 - visibleParticles.length / 100) {
          createParticle('waterdrop')
        }

        return visibleParticles
      })
    }

    const requestAnimationFrameId = requestAnimationFrame(animateParticles)

    return () => cancelAnimationFrame(requestAnimationFrameId)
  }, [particles])

  return (
    <div
      ref={frameRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {particles}
    </div>
  )
}

const generateRandomColor = (): string => {
  const hue = Math.floor(Math.random() * 360)
  const saturation = 90 + Math.random() * 30
  const lightness = 40 + Math.random() * 30
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

export default BubbleBackground
