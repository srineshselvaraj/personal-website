import ExperienceItem from './ExperienceItem';
import { FaFileDownload } from 'react-icons/fa';

function Experience() {
  // Example experiences - replace with your actual experiences
  const experiences = [
    {
      position: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      company: "Example Tech",
      description: "Led the development of a cloud-based analytics platform. Implemented microservices architecture using Node.js and React. Managed a team of 4 developers and improved system performance by 40%.",
      logoUrl: "/company1-logo.png" // Replace with actual logo path
    },
    {
      position: "Software Engineer",
      dateRange: "Mar 2020 - Dec 2021",
      company: "Tech Solutions Inc",
      description: "Developed and maintained multiple web applications using React and TypeScript. Collaborated with cross-functional teams to deliver features on time. Implemented CI/CD pipelines reducing deployment time by 60%.",
      logoUrl: "/company2-logo.png" // Replace with actual logo path
    },
    {
      position: "Junior Developer",
      dateRange: "Jun 2019 - Feb 2020",
      company: "StartUp Co",
      description: "Built responsive web applications using modern JavaScript frameworks. Worked directly with clients to gather requirements and implement features. Participated in code reviews and documentation.",
      logoUrl: "/company3-logo.png" // Replace with actual logo path
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Resume Download Button */}
      <div className="flex justify-end mb-8">
        <a
          href="/your-resume.pdf" // Replace with actual resume path
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <FaFileDownload className="mr-2" />
          Download Resume
        </a>
      </div>

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