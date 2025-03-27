import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import { FaTimes } from "react-icons/fa"; // ✅ Fixed import
import { BsSearch } from "react-icons/bs"; // Search icon
import portfolioImg from "../assets/portfolio.jpg";
import chatbotImg from "../assets/chatbot.jpg";
import dashboardImg from "../assets/dashboard.jpg";

// Projects Data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Dev",
    description:
      "A sleek, mobile-friendly portfolio built using React and Tailwind CSS. Features dark mode, animations, and an optimized UI.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    image: portfolioImg,
    link: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "AI Chatbot",
    category: "AI",
    description:
      "A chatbot powered by OpenAI’s GPT model, capable of providing intelligent responses in real time.",
    techStack: ["Python", "OpenAI API", "Flask"],
    image: chatbotImg,
    link: "https://github.com/yourusername/ai-chatbot",
  },
  {
    id: 3,
    title: "Data Analysis Dashboard",
    category: "Data Science",
    description:
      "An interactive dashboard for visualizing datasets with real-time analytics and graph rendering using Dash.",
    techStack: ["Python", "Pandas", "Dash"],
    image: dashboardImg,
    link: "https://github.com/yourusername/data-dashboard",
  },
];

const categories = ["All", "Web Dev", "Data Science", "AI"];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Featured Project (first project)
  const featuredProject = projects[0];

  // Filtered projects based on category & search
  const filteredProjects = projects.filter(
    (project) =>
      (activeCategory === "All" || project.category === activeCategory) &&
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-all duration-300">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center">My Projects</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          A collection of my best works showcasing my skills in web development, AI, and data science.
        </p>

        {/* 🔍 Search & Filter */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <div className="relative">
            <BsSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-transform duration-200 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
                } hover:scale-105 hover:bg-blue-500 hover:text-white`}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* 🌟 Featured Project */}
        <div className="mt-12 p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold">Featured Project</h3>
          <Tilt>
            <div className="mt-4">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-bold mt-4">{featuredProject.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{featuredProject.description}</p>
              <a
                href={featuredProject.link}
                className="text-blue-500 dark:text-blue-400 font-semibold hover:underline mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </Tilt>
        </div>
        
        {/* 🔄 Project Grid */}
        <motion.div layout className="grid md:grid-cols-3 gap-6 mt-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Tilt key={project.id} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-blue-500/50 transition-transform duration-300 transform hover:scale-105"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
                  <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{project.category}</p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* 🔳 Modal for Project Details */}
        <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-10/12 md:w-1/3"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{selectedProject.title}</h2>
          <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-red-500">
            <FaTimes size={20} />
          </button>
        </div>
        <div className="flex flex-col items-center mt-4">
          <img src={selectedProject.image} alt={selectedProject.title} className="w-full max-w-xs rounded-lg" />
          <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm text-center">{selectedProject.description}</p>
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {selectedProject.techStack.map((tech, index) => (
            <span key={index} className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-white px-3 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 text-sm"
        >
          View Project →
        </a>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
        {/* 📊 Animated Project Stats */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold">Project Statistics</h3>
          <div className="flex justify-center gap-10 mt-4">
            <div>
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp end={20} duration={3} />+
              </span>
              <p className="text-gray-500 dark:text-gray-400">Projects Completed</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <CountUp end={5} duration={3} />+
              </span>
              <p className="text-gray-500 dark:text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
