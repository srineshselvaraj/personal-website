import {
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaPhp
} from 'react-icons/fa';
import {
  SiPostgresql, SiFlask, SiMysql, SiCplusplus,
  SiPandas, SiNumpy, SiBootstrap, SiStreamlit
} from 'react-icons/si';

// Custom icons for technologies not available in react-icons
const customIcons = {
  "scikit-learn": "/tech-icons/scikit-learn.svg",
  matplotlib: "/tech-icons/matplotlib.svg",
  dash: "/tech-icons/dash.svg"
};

// Map of technology names to their respective react-icons components
const techIconMap = {
  // Frontend
  react: FaReact,
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  bootstrap: SiBootstrap,

  // Backend
  python: FaPython,
  php: FaPhp,
  flask: SiFlask,
  
  // Databases
  postgresql: SiPostgresql,
  mysql: SiMysql,

  // Data Science & ML
  pandas: SiPandas,
  numpy: SiNumpy,
  streamlit: SiStreamlit,

  // Programming Languages
  "c++": SiCplusplus
};

function TechStack({ technologies }) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => {
        // Convert to lowercase and remove spaces for matching
        const normalizedName = tech.name.toLowerCase().replace(/\s+/g, '');
        const Icon = tech.icon || techIconMap[normalizedName];
        const customIcon = customIcons[normalizedName];
        
        return (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
          >
            {Icon ? (
              <Icon className="w-4 h-4 mr-1.5 text-gray-700" />
            ) : customIcon ? (
              <img
                src={customIcon}
                alt={`${tech.name} icon`}
                className="w-4 h-4 mr-1.5"
              />
            ) : null}
            <span className="text-gray-700">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default TechStack; 