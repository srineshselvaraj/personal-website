function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center max-w-2xl mx-auto text-center space-y-8">
        {/* Profile Picture */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
          {/* Replace the img src with your actual image path */}
          <img
            src="/your-photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Welcome Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Hi, I'm [Your Name]! 👋
        </h1>

        {/* Bio */}
        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
          Welcome to my corner of the web! I'm a [your role/passion] based in [your location].
        </p>
        <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
          I'm passionate about [your interests/expertise] and love [something personal/professional]. 
          Currently, I'm [what you're working on/studying/pursuing].
        </p>
      </div>
    </div>
  );
}

export default Home; 