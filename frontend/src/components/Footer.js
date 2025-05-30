import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-emerald-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-end space-x-6">
          <a
            href="https://linkedin.com/in/srinesh-selvaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-200 hover:text-emerald-100 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/srineshselvaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-200 hover:text-emerald-100 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="mailto:srinesh9@gmail.com"
            className="text-emerald-200 hover:text-emerald-100 transition-colors"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 