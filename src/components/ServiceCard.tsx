import { useSpring, animated } from '@react-spring/web';

interface Service {
    title: string;
    description: string;
    image: string;
  }
  
const ServiceCard: React.FC<Service> = ({ title, description, image }) => {
    const cardSpring = useSpring({
      from: { opacity: 0, transform: 'scale(0.8)' },
      to: { opacity: 1, transform: 'scale(1)' },
      config: { tension: 170, friction: 12 }, // Adjust the tension and friction here
    });
  
    return (
      <animated.div style={cardSpring}>
        <div className="p-8 m-2 rounded-lg h-full border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
          <div className="aspect-w-4 aspect-h-3 mb-4">
            <img src={image} alt={title} className="rounded-md object-cover w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </animated.div>
    );
  };

  export default ServiceCard;