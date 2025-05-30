import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-emerald-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Home Link */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-emerald-800 flex items-center justify-center rounded">
              {/* Placeholder for logo */}
              <span className="text-emerald-100">Logo</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              to="/experience"
              className="text-emerald-100 hover:text-emerald-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="text-emerald-100 hover:text-emerald-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 