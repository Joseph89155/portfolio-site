import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Dev",
    image: "/assets/portfolio.png",
    description: "A sleek and responsive portfolio showcasing my skills and projects.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "AI Chatbot",
    category: "AI",
    image: "/assets/chatbot.png",
    description: "A chatbot powered by OpenAI’s GPT model, providing intelligent responses.",
    technologies: ["Python", "OpenAI API", "Flask"],
    link: "https://github.com/yourusername/ai-chatbot",
  },
  {
    id: 3,
    title: "Data Analysis Dashboard",
    category: "Data Science",
    image: "/assets/dashboard.png",
    description: "An interactive dashboard for visualizing large datasets effectively.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    link: "https://github.com/yourusername/data-dashboard",
  },
];

const categories = ["All", "Web Dev", "Data Science", "AI"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
        My Projects
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center space-x-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition 
              ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all 
              hover:scale-105 hover:shadow-xl hover:border hover:border-blue-500 relative"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0, 123, 255, 0.5)", // Blue Glow Effect
            }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Pop-up */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }} // Zoom-out effect when closing
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{selectedProject.description}</p>
              
              {/* Tech Stack */}
              <div className="flex justify-center gap-2 mt-4">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 font-medium hover:underline"
              >
                View Project →
              </a>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
