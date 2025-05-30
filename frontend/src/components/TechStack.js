import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws,
  FaHtml5, FaCss3Alt, FaJs, FaGit, FaNpm
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiTailwindcss,
  SiExpress, SiDjango, SiSpring, SiKubernetes, SiFirebase
} from 'react-icons/si';

// Map of technology names to their respective react-icons components
const techIconMap = {
  react: FaReact,
  node: FaNodeJs,
  python: FaPython,
  java: FaJava,
  docker: FaDocker,
  aws: FaAws,
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJs,
  git: FaGit,
  npm: FaNpm,
  typescript: SiTypescript,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  redis: SiRedis,
  tailwindcss: SiTailwindcss,
  express: SiExpress,
  django: SiDjango,
  spring: SiSpring,
  kubernetes: SiKubernetes,
  firebase: SiFirebase
};

function TechStack({ technologies }) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => {
        const Icon = tech.icon || techIconMap[tech.name.toLowerCase()];
        
        return (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
          >
            {Icon ? (
              <Icon className="w-4 h-4 mr-1.5 text-gray-700" />
            ) : tech.customIcon ? (
              <img
                src={tech.customIcon}
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