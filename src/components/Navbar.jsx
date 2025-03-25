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
          ? "bg-white dark:bg-gray-800 shadow-lg text-gray-900 dark:text-white"
          : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          My Portfolio
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {["Home", "Projects", "About", "Contact"].map((text, index) => (
            <li key={index}>
              <Link
                to={`/${text.toLowerCase()}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded transition-all duration-300 hover:scale-105"
        >
          {darkMode ? "🌙 " : "☀️ "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
