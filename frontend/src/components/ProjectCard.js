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
    <div className="w-full bg-emerald-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 shadow-emerald-900/50">
      {/* Header - Always visible */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-emerald-800"
      >
        <h3 className="text-xl font-semibold text-emerald-100">{name}</h3>
        <FaChevronDown
          className={`text-emerald-300 transition-transform duration-300 ${
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
        <div className="px-4 py-3 border-t border-emerald-800">
          <p className="text-emerald-100 mb-3">{description}</p>
          
          {/* Tech Stack */}
          {technologies && technologies.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-emerald-200 mb-2">Technologies Used:</h4>
              <TechStack technologies={technologies} />
            </div>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
        </div>

        {/* Image Carousel */}
        {images.length > 0 && (
          <div className="relative p-4 border-t border-emerald-800">
            <div className="relative h-96 overflow-hidden rounded-lg bg-emerald-950">
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
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-emerald-800/80 hover:bg-emerald-800 p-2 rounded-full shadow-md transition-colors z-20"
                  >
                    <BsChevronLeft className="text-emerald-100" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-800/80 hover:bg-emerald-800 p-2 rounded-full shadow-md transition-colors z-20"
                  >
                    <BsChevronRight className="text-emerald-100" />
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
                          ? 'bg-emerald-400'
                          : 'bg-emerald-700 hover:bg-emerald-600'
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