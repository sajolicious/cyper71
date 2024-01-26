import React from 'react'
import './../assets/css/custom_style.css'
import { FaCheck, FaDesktop, FaCodeBranch, FaMobileAlt } from 'react-icons/fa'

const ProjectPortfolio: React.FC = () => {
  return (
    <div>
      {/* Portfolio Hero Section Start Here "Created by Abdul Ahad - 10 January, 2024" */}
      <div className="protfolio-hero-bg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Industry-Specific Web Development
          </h1>
          <p className="mb-8 text-lg font-normal text-zinc-400 pt-5 lg:text-xl sm:px-12 dark:text-gray-400">
            We develop multi-integrated, easily customizable and fully controllable web applications tailored to
            specific industries applying the latest technology trends and the peculiarities of each business domain.
          </p>
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">Get in Touch</span>{' '}
            <span className="text-sm font-medium">Learn more about us!</span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
            {renderCheckListItem('business analysis')}
            {renderCheckListItem('QA & testing')}
            {renderCheckListItem('app design')}
            {renderCheckListItem('code review')}
            {renderCheckListItem('frontend development')}
            {renderCheckListItem('rescue missions')}
            {renderCheckListItem('backend development')}
          </div>

          {/* End of Portfolio Hero Section */}

          {/* About Section Starts here - Abdul Ahad - 11 January, 2024 */}
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
            <h2 className="text-2xl md:text-4xl md:font-normal lg:text-5xl">
              Custom web <span className="text-blue-500">applications</span> built with professionals
            </h2>
            <p className="py-5 text-white text-justify md:text-2xl md:text-center lg:pt-8">
              Our team consists of 70% senior specialists with a vast background in their professional careers. We make
              a choice of the technology stack based on that extensive experience and taking into account the future
              product's scalability and the resources you have to maintain it. As a result, you get an easily
              maintainable product that can scale at the same pace as your business grows.
            </p>

            <div className="grid grid-cols-1 gap-4 py-12 md:grid-cols-3">
              {renderFeatureItem(FaDesktop, '2x less time spent on development-ready design')}
              {renderFeatureItem(FaCodeBranch, '25% cut time on UI design')}
              {renderFeatureItem(FaMobileAlt, '30% cut time on new design delivery')}
            </div>
          </div>
          {/* End of about section */}
        </div>
      </div>
      {/* End of Portfolio Hero Section */}
    </div>
  )
}

// Helper function to render check list items
const renderCheckListItem = (text: string) => (
  <div className="text-left pl-3 md:pl-20 lg:pl-36">
    <span className="text-blue-500 text-2xl mr-3">
      <FaCheck />
    </span>
    <span className="text-white md:text-xl">{text}</span>
  </div>
)

// Helper function to render feature items
const renderFeatureItem = (IconComponent: React.ElementType, text: string) => (
  <div className="pb-8">
    <div className="grid gird-cols-1 justify-center text-bloue-300 pb-3">
      <IconComponent size={64} />
    </div>
    <p className="text-xl font-medium text-gray-600 md:text-2xl">{text}</p>
  </div>
)

export default ProjectPortfolio
