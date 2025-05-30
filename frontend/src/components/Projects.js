import ProjectCard from './ProjectCard';

function Projects() {
  // Example projects - replace with your actual projects
  const projects = [
    {
      name: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built with React and Tailwind CSS. Features include a dynamic timeline for work experience, expandable project cards with image carousels, and contact information.",
      githubUrl: "https://github.com/yourusername/personal-website",
      images: ["/project1-1.jpg", "/project1-2.jpg", "/project1-3.jpg"],
      technologies: [
        { name: "React" },
        { name: "TailwindCSS" },
        { name: "JavaScript" }
      ]
    },
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Includes features like user authentication, product catalog, shopping cart, and payment integration.",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      images: ["/project2-1.jpg", "/project2-2.jpg"],
      technologies: [
        { name: "React" },
        { name: "Node" },
        { name: "MongoDB" },
        { name: "Express" },
        { name: "TypeScript" }
      ]
    },
    {
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates using Socket.IO. Features include task creation, assignment, status tracking, and team collaboration tools.",
      githubUrl: "https://github.com/yourusername/task-manager",
      images: ["/project3-1.jpg", "/project3-2.jpg", "/project3-3.jpg", "/project3-4.jpg"],
      technologies: [
        { name: "React" },
        { name: "Node" },
        { name: "PostgreSQL" },
        // Example of using a custom icon
        { 
          name: "Socket.IO",
          customIcon: "/tech-icons/socketio.svg" // You'll need to add this icon
        }
      ]
    },
    {
      name: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple cities. Built with React and integrates with the OpenWeather API.",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      images: ["/project4-1.jpg"],
      technologies: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "TailwindCSS" }
      ]
    },
    {
      name: "Social Media Analytics Tool",
      description: "A tool for analyzing social media engagement and generating insights. Features include data visualization, trend analysis, and automated reporting.",
      githubUrl: "https://github.com/yourusername/social-analytics",
      images: ["/project5-1.jpg", "/project5-2.jpg", "/project5-3.jpg"],
      technologies: [
        { name: "Python" },
        { name: "Django" },
        { name: "PostgreSQL" },
        { name: "Redis" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Projects</h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            githubUrl={project.githubUrl}
            images={project.images}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects; 