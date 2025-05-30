function ExperienceItem({ position, dateRange, company, description, logoUrl }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12">
      {/* Left side - Position and Date */}
      <div className="md:w-1/3 text-right">
        <h3 className="text-xl font-semibold text-emerald-100">{position}</h3>
        <p className="text-sm text-emerald-300 mt-1">{dateRange}</p>
      </div>

      {/* Timeline line */}
      <div className="hidden md:block w-px bg-emerald-700 relative"></div>

      {/* Right side - Company, Logo, and Description */}
      <div className="md:w-2/3">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src={logoUrl}
              alt={`${company} logo`}
              className="w-full h-full object-contain rounded bg-emerald-800/50 p-1"
            />
          </div>
          
          {/* Company and Description */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-200">{company}</h3>
            <p className="text-emerald-100 mt-2 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem; 