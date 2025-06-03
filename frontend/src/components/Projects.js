import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      name: "Dataset Dashboard",
      description: "An interactive dashboard that lets users upload any dataset, select any target variable, generate bar charts for categorical features and correlation, and train a regression model with any combination of features. I built this project with a group of 3 as part of a class project.",
      githubUrl: "https://github.com/parkab/NJIT-CS301-Milestone4-Group9",
      images: ["/dashboard1.png"],
      technologies: [
        { name: "Python" },
        { name: "Dash" },
        { name: "scikit-learn" },
        { name: "pandas" },
        {name: "HTML"},
        {name: "CSS"}
      ]
    },
    {
      name: "COGnition",
      description: "An LLM-powered learning tool that allows users to quickly generate summaries, questions, and flashcards based on any given text, with OCR capabilities and a login system. I built this project in 24 hours with a team of 3 for HackNJIT 2024.",
      githubUrl: "https://github.com/srineshselvaraj/hacknjit-2024",
      images: ["/cognition1.jpg", "/cognition2.jpg", "/cognition3.jpg", "/cognition4.jpg"],
      technologies: [
        { name: "React" },
        { name: "Bootstrap" },
        { name: "Flask" },
        { name: "PostgreSQL" }
      ]
    },
    {
      name: "Tech Accessories Store",
      description: "A website for a fictional tech accessories store with a login system and product catalog. Consumers can browse products, and admins can manage the catalog and generate shipping labels. I built this project as part of a class project.",
      githubUrl: "https://github.com/srineshselvaraj/tech-accessories-store",
      images: ["/tas1.png", "/tas2.png", "/tas3.png", "/tas4.png", "/tas5.png"],
      technologies: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "PHP" },
        { name: "MySQL" }
      ]
    },
    {
      name: "Maritime Mortality",
      description: "A data analysis tool that can visualize and predict shipwreck survival rates based on year, age, and gender. I built this project in 24 hours for HackNJIT 2023.",
      githubUrl: "https://github.com/srineshselvaraj/maritime-mortality",
      images: ["/mm1.png", "/mm2.png", "/mm3.png", "/mm4.png"],
      technologies: [
        { name: "Python" },
        { name: "NumPy" },
        { name: "Pandas" },
        { name: "Matplotlib" },
        { name: "Scikit-learn" },
        { name: "Streamlit" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-emerald-100 mb-8 text-center">My Projects</h2>
      
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