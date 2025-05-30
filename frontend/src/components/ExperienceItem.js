function ExperienceItem({ position, dateRange, company, description, logoUrl }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12">
      {/* Left side - Position and Date */}
      <div className="md:w-1/3 text-right">
        <h3 className="text-xl font-semibold text-gray-800">{position}</h3>
        <p className="text-sm text-gray-500 mt-1">{dateRange}</p>
      </div>

      {/* Timeline line */}
      <div className="hidden md:block w-px bg-blue-200 relative">
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-1.5 top-2"></div>
      </div>

      {/* Right side - Company, Logo, and Description */}
      <div className="md:w-2/3">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src={logoUrl}
              alt={`${company} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Company and Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{company}</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem; 