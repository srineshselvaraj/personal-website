import ExperienceItem from './ExperienceItem';
import { FaFileDownload } from 'react-icons/fa';

function Experience() {
  // Example experiences - replace with your actual experiences
  const experiences = [
    {
      position: "Information Technology Intern",
      dateRange: "Jun 2025 - Aug 2025",
      company: "Voya Financial",
      description: "I will be working on the Solutions Architecture team.",
      logoUrl: "/voya.png" // Replace with actual logo path
    },
    {
      position: "Software Engineer Intern",
      dateRange: "Mar 2025 - Jun 2025",
      company: "Quantum Pulse Consulting",
      description: "I contributed to the development of a client-facing web application using React, Django, and PostgreSQL. I worked with a cross-functional Agile team to deliver features efficiently and iteratively.",
      logoUrl: "/qpc.jpg" // Replace with actual logo path
    },
    {
      position: "Undergraduate Researcher",
      dateRange: "Apr 2024 - May 2025",
      company: "New Jersey Institute of Technology",
      description: "I conducted paid research developing interactive data visualizations of complex network graphs using Unity and C#. I also designed an independent study where I built a generative AI agent in VR.",
      logoUrl: "/njit.jpg" // Replace with actual logo path
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Work Experience</h2>
        
        {/* Timeline Items */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              position={exp.position}
              dateRange={exp.dateRange}
              company={exp.company}
              description={exp.description}
              logoUrl={exp.logoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience; 