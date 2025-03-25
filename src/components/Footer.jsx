import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-4 text-center">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-400 transition duration-300 transform hover:scale-110"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 transform hover:scale-110"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
        >
          <FaTwitter className="text-2xl" />
        </a>
      </div>
      <p className="text-sm mt-2">&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
