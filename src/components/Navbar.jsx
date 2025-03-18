import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [scrolled, setScrolled] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full p-4 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-lg"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          My Portfolio
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded"
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
