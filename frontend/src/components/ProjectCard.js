import { useState } from 'react';
import { FaChevronDown, FaGithub } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import TechStack from './TechStack';

function ProjectCard({ name, description, githubUrl, images, technologies }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
      {/* Header - Always visible */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
      >
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <FaChevronDown
          className={`text-gray-500 transition-transform duration-300 ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
        />
      </div>

      {/* Expandable Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        {/* Project Description and GitHub Link */}
        <div className="px-4 py-3 border-t border-gray-100">
          <p className="text-gray-600 mb-3">{description}</p>
          
          {/* Tech Stack */}
          {technologies && technologies.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
              <TechStack technologies={technologies} />
            </div>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
        </div>

        {/* Image Carousel */}
        {images.length > 0 && (
          <div className="relative p-4 border-t border-gray-100">
            <div className="relative h-96 overflow-hidden rounded-lg bg-gray-100">
              {/* Images Container */}
              <div className="absolute w-full h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 flex items-center justify-center ${
                      index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${name} screenshot ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      previousImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors z-20"
                  >
                    <BsChevronLeft className="text-gray-800" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors z-20"
                  >
                    <BsChevronRight className="text-gray-800" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentImageIndex === index
                          ? 'bg-blue-600'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard; 