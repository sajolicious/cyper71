import React from 'react'
import projectImage1 from '../assets/project1.png'
import projectImage2 from '../assets/project2.png'

interface Project {
  title: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Ecommerce Website',
    description: 'A fully functional Ecommerce website using MERN also using Redux for state management.',
    image: projectImage1,
  },
  {
    title: 'Another Project',
    description: 'Description for another project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: projectImage2,
  },
  {
    title: 'Ecommerce Website',
    description: 'A fully functional Ecommerce website using MERN also using Redux for state management.',
    image: projectImage1,
  },
  {
    title: 'Ecommerce Website',
    description: 'A fully functional Ecommerce website using MERN also using Redux for state management.',
    image: projectImage1,
  },
  {
    title: 'Another Project',
    description: 'Description for another project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: projectImage2,
  },
  {
    title: 'Ecommerce Website',
    description: 'A fully functional Ecommerce website using MERN also using Redux for state management.',
    image: projectImage1,
  },
  {
    title: 'Ecommerce Website',
    description: 'A fully functional Ecommerce website using MERN also using Redux for state management.',
    image: projectImage1,
  },
  {
    title: 'Another Project',
    description: 'Description for another project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: projectImage2,
  },
  {
    title: 'Ecommerce Website',
    description: 'A fully functional Ecommerce website using MERN also using Redux for state management.',
    image: projectImage1,
  },
  // Add more projects as needed
]

const ProjectShowcase: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Explore Our Products</h2>
          <p className="text-gray-600 mt-2">Discover innovative solutions crafted for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 rounded-md shadow-md transition-transform transform hover:scale-105 bg-white"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md object-cover w-full h-full border border-gray-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/products" className="text-blue-500 font-semibold text-lg hover:underline">
            Explore All Products
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectShowcase
