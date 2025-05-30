function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center max-w-2xl mx-auto text-center space-y-8">
        {/* Profile Picture */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-700 shadow-lg">
          {/* Replace the img src with your actual image path */}
          <img
            src="/profile2.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Welcome Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-100 leading-tight">
          Hi, I'm Srinesh!
        </h1>

        {/* Bio */}
        <p className="text-xl text-emerald-200 leading-relaxed max-w-xl">
          I'm an honors computer science student at NJIT based in the New York metropolitan area.
        </p>
        <p className="text-lg text-emerald-300 leading-relaxed max-w-xl">
          I'm passionate about technology, with a strong focus in software development and artificial intelligence. I'm always looking for new opportunities to learn and grow in the tech space.
        </p>
      </div>
    </div>
  );
}

export default Home; 