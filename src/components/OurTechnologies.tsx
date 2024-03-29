import React, { useState } from 'react'
import {
  FaReact,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaAngular,
  FaVuejs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaMobile,
  FaServer,
  FaCog,
  FaProjectDiagram,
} from 'react-icons/fa'
import CategoryButton from './CategoryButton';
import IconGrid from './IconGrid';

interface Technology {
  name: string
  icons: React.ReactNode[]
}

const additionalFrontendIcons = [
  <FaVuejs key="vuejs" size={80} color="#FFFFFF" />,
  <FaAngular key="angular" size={80} color="#FFFFFF" />,
]
const additionalBackendIcons = [
  <FaJava key="java" size={80} color="#FFFFFF" />,
  <FaPython key="python" size={80} color="#FFFFFF" />,
]
const additionalProgrammingIcons = [
  <FaHtml5 key="html5" size={80} color="#FFFFFF" />,
  <FaReact key="react" size={80} color="#FFFFFF" />,
]
const additionalUIUXIcons = [
  <FaCss3 key="css" size={80} color="##FFFFFF" />,
  <FaBootstrap key="bootstrap" size={80} color="#7952B3" />,
]
const additionalDevOpsIcons = [
  <FaDocker key="docker" size={80} color="#2496ED" />,
  <FaAws key="aws" size={80} color="#FF9900" />,
]
const additionalServerIcons = [
  <FaCog key="config" size={80} color="#7B7B7B" />,
  <FaDatabase key="database" size={80} color="#336791" />,
]
const additionalMobileIcons = [
  <FaMobile key="mobile" size={80} color="#3DDC84" />,
  <FaServer key="server" size={80} color="#6CB33F" />,
]
const additionalServicesIcons = [
  <FaProjectDiagram key="diagram" size={80} color="#EC7D0B" />,
  <FaCog key="config" size={80} color="#7B7B7B" />,
]

const categories: Technology[] = [
  {
    name: 'Frontend',
    icons: [
      ...additionalFrontendIcons,
      <FaReact key="react" size={80} color="#61DAFB" />,
      <FaCss3 key="css" size={80} color="#38B2AC" />,
      <FaBootstrap key="bootstrap" size={80} color="#7952B3" />,
    ],
  },
  {
    name: 'Backend',
    icons: [
      ...additionalBackendIcons,
      <FaNodeJs key="nodejs" size={80} color="#68A063" />,
      <FaDatabase key="database" size={80} color="#336791" />,
    ],
  },
  {
    name: 'Programming Languages',
    icons: [
      ...additionalProgrammingIcons,
      <FaJs key="js" size={80} color="#F7DF1E" />,
      <FaPython key="python" size={80} color="#306998" />,
      <FaJava key="java" size={80} color="#007396" />,
    ],
  },
  {
    name: 'UI/UX',
    icons: [
      ...additionalUIUXIcons,
      <FaAngular key="angular" size={80} color="#DD0031" />,
      <FaVuejs key="vuejs" size={80} color="#42B883" />,
      <FaHtml5 key="html5" size={80} color="#E44D26" />,
    ],
  },
  {
    name: 'DevOps',
    icons: [
      ...additionalDevOpsIcons,
      <FaDocker key="docker" size={80} color="#2496ED" />,
      <FaAws key="aws" size={80} color="#FF9900" />,
      <FaCog key="config" size={80} color="#7B7B7B" />,
    ],
  },
  {
    name: 'Server',
    icons: [
      ...additionalServerIcons,
      <FaServer key="server" size={80} color="#6CB33F" />,
      <FaProjectDiagram key="diagram" size={80} color="#EC7D0B" />,
    ],
  },
  { name: 'Mobile App', icons: [...additionalMobileIcons, <FaMobile key="mobile" size={80} color="#3DDC84" />] },
  {
    name: 'Services',
    icons: [
      ...additionalServicesIcons,
      <FaAws key="aws" size={80} color="#FF9900" />,
      <FaCog key="config" size={80} color="#7B7B7B" />,
    ],
  },
]

const defaultCategory = categories[0]

const TechnologySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Technology>(defaultCategory);

  return (
    <section className="py-16 h-full flex items-center justify-center">
      <div className="container mx-auto text-center">
        <div className="leading-[36px] md:leading-[45px] lg:leading-[72px] font-popp text-[36px] md:text-[45px] font-bold text-black lg:text-6xl m-6">
          <span className="outlined_font">SERVICES</span>
          <br />
          <span>WE </span>
          <span className="outlined_font">PROVIDE</span>
        </div>
        <div className="flex flex-wrap mb-4 space-x-4 justify-center items-center">
          {categories.map((category) => (
            <CategoryButton
              key={category.name}
              name={category.name}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
        <IconGrid icons={selectedCategory.icons} />
      </div>
    </section>
  );
};

export default TechnologySection;