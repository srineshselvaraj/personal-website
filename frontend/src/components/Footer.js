import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-end items-center space-x-6">
          <span className="text-gray-600 font-medium">Contact me:</span>
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            <MdEmail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 