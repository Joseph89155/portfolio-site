import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import portfolioImg from "../assets/portfolio.jpg";
import salesImg from "../assets/sales.jpg";
import PowerBIImg from "../assets/powerbi.jpg";
import TableauImg from "../assets/tableau.jpg";
import MySQLImg from "../assets/mysql.jpg";
import HealthImg from "../assets/health.jpg";
import RiskImg from "../assets/risk.jpg";
import AQIImg from "../assets/aqi.jpg";

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
    link: "https://github.com/Joseph89155/portfolio-site",
  },
  {
    id: 2,
    title: "Excel Dashboard",
    category: "Data Analysis",
    description:
      "This project focuses on analyzing bike sales data to uncover key customer insights and sales trends using Microsoft Excel",
    techStack: ["Excel", "Dash"],
    image: salesImg,
    link: "https://github.com/Joseph89155/Bike-Sales-Excel-Dashboard",
  },
  {
    id: 3,
    title: "Power BI Dashboard",
    category: "Data Analysis",
    description:
      "An interactive Power BI dashboard analyzing survey data from data professionals worldwide.",
    techStack: ["Power BI", "Excel", "Dash"],
    image: PowerBIImg,
    link: "https://github.com/Joseph89155/Data-Professional-Survey-Power-BI-Analysis-Project",
  },
  {
    id: 4,
    title: "Tableau Dashboard",
    category: "Data Analysis",
    description:
      "This Tableau project explores Airbnb listing data from Seattle to identify pricing patterns, revenue trends, and geographic insights.",
    techStack: ["Tableau", "Excel", "Dash"],
    image: TableauImg,
    link: "https://github.com/Joseph89155/Airbnb-Tableau-Data-Analysis-Project",
  },
  {
    id: 5,
    title: "MySQL Data Cleaning",
    category: "Data Analysis",
    description:
      "This SQL-based data cleaning project focuses on a dataset containing global company layoff records.",
    techStack: ["MySQL", "Excel"],
    image: MySQLImg,
    link: "https://github.com/Joseph89155/Layoffs-Data-Cleaning-Project-MySQL-",
  },
  {
    id: 6,
    title: "Health Analytics Full Project (SQL, BI, Excel)",
    category: "Data Analysis",
    description:
      "Analyze data using SQL for insights and trends. Built dynamic Power BI and Excel dashboards to visualize patterns.",
    techStack: ["MySQL", "BI", "Excel"],
    image: HealthImg,
    link: "https://github.com/Joseph89155/Health-Analytics-Project-SQL-BI-Excel-",
  },
  {
    id: 7,
    title: "Risk Analysis",
    category: "Data Science",
    description:
      "A risk analysis project using Data Science Methodologies to assess loan approval decisions.",
    techStack: ["Python", "Pandas", "Matplotlib", "Dash"],
    image: RiskImg,
    link: "https://github.com/Joseph89155/Loan-Approval-Financial-Risk-Analysis-Python",
  },
  {
    id: 8,
    title: "Air Quality Index (AQI) Analysis",
    category: "Data Science",
    description:
      "Analyze data and identify key patterns for insights that support public health awareness and environmental policy decisions.",
    techStack: ["Python", "Pandas", "Matplotlib", "Dash"],
    image: AQIImg,
    link: "https://github.com/Joseph89155/Global-Air-Quality-Index-AQ-Python",
  },
];

const categories = ["All", "Web Dev", "Data Analysis", "Data Science"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-5 md:px-16 bg-white dark:bg-[#0b1120]">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Explore a curated selection of my work across web development, data analysis, and data science.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-blue-600 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg overflow-hidden relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.2}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </Tilt>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <BsSearch className="text-white text-2xl" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full mx-5 relative p-6 shadow-lg"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap mt-4 gap-2">
              {selectedProject.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
