import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import portfolioImg from "../assets/portfolio.jpg";
import inventoryImg from "../assets/inventory.jpg";
import salesImg from "../assets/sales.jpg";
import PowerBIImg from "../assets/powerbi.jpg";
import TableauImg from "../assets/tableau.jpg";
import MySQLImg from "../assets/mysql.jpg";
import HealthImg from "../assets/health.jpg";
import CreditcardImg from "../assets/credit.jpg";
import RiskImg from "../assets/risk.jpg";
import HockeyImg from "../assets/hockey.jpg";
import AQIImg from "../assets/aqi.jpg";

// Projects Data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Web Dev",
    description:
      "This portfolio is designed to reflect my professional background, technical abilities, and personal projects. It includes interactive UI elements, animations, and a clean layout to provide a great browsing experience.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    image: portfolioImg,
    link: "https://github.com/Joseph89155/portfolio-site",
  },
  {
    id: 2,
    title: "Inventory System",
    category: "Web Dev",
    description:
      "A modern, user-friendly inventory management system built with React and tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    image: inventoryImg,
    link: "https://github.com/Joseph89155/inventory-system",
  },
  {
    id: 2,
    title: "Bike Sales Excel Dashboard",
    category: "Data Analysis",
    description:
      "This project focuses on analyzing bike sales data to uncover key customer insights and sales trends. Using Microsoft Excel, I cleaned the raw data, performed analysis through pivot tables, and created an interactive dashboard. The goal is to provide actionable insights that can help improve marketing strategies and boost future bike sales.",
    techStack: ["Excel", "Dash"],
    image: salesImg,
    link: "https://github.com/Joseph89155/Bike-Sales-Excel-Dashboard",
  },
  {
    id: 3,
    title: "Data Professional Survey Power BI Dashboard",
    category: "Data Analysis",
    description:
      "This project focuses on analyzing survey data collected from data professionals globally. Using Microsoft Power BI, I cleaned the raw dataset, built a relational data model, and created an interactive dashboard. The goal is to uncover key insights about the countries data professionals come from, their job roles, salary trends, career difficulties, preferred programming languages, and work satisfaction levels.",
    techStack: ["Power BI", "Excel", "Dash"],
    image: PowerBIImg,
    link: "https://github.com/Joseph89155/Data-Professional-Survey-Power-BI-Analysis-Project",
  },
  {
    id: 4,
    title: "Airbnb Tableau Dashboard",
    category: "Data Analysis",
    description:
      "This Tableau project focuses on analyzing Airbnb listing data to explore price variations, listing distribution, and revenue trends across Seattle. Using Tableau Desktop, I prepared, analyzed, and visualized the data to uncover valuable insights into pricing patterns by bedroom count, geographic location (zipcode), and seasonality throughout the year.",
    techStack: ["Tableau", "Excel", "Dash"],
    image: TableauImg,
    link: "https://github.com/Joseph89155/Airbnb-Tableau-Data-Analysis-Project",
  },
  {
    id: 5,
    title: "Layoffs MySQL Data Cleaning",
    category: "Data Analysis",
    description:
      "This SQL-based data cleaning project focuses on a dataset containing global company layoff records. Using MySQL, I cleaned and transformed raw CSV data to prepare it for accurate and efficient analysis. This is part of a hands-on portfolio series intended to strengthen SQL data wrangling skills for real-world business use cases.",
    techStack: ["MySQL", "Excel"],
    image: MySQLImg,
    link: "https://github.com/Joseph89155/Layoffs-Data-Cleaning-Project-MySQL-",
  },
  {
    id: 6,
    title: "Health Analytics Full Project (SQL, BI, Excel)",
    category: "Data Analysis",
    description:
      "This project focuses on analyzing OCD (Obsessive-Compulsive Disorder) patient data to uncover trends and insights based on gender, ethnicity, obsession/compulsion types, and diagnosis timelines. Using SQL for data cleaning and exploration, the processed data was then visualized in both Power BI and Excel dashboards.",
    techStack: ["MySQL", "BI", "Excel"],
    image: HealthImg,
    link: "https://github.com/Joseph89155/Health-Analytics-Project-SQL-BI-Excel-",
  },
    {
    id: 7,
    title: "Credit Card Fraud Detection",
    category: "Data Science",
    description:
      "This project demonstrates how machine learning techniques can be applied to detect fraudulent credit card transactions. We explore the use of Decision Tree and Support Vector Machine (SVM) models, with steps covering data preprocessing, exploratory data analysis (EDA), class imbalance handling, model training, evaluation, and interpretation.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Numpy", "Scikit-learn",],
    image: CreditcardImg,
    link: "https://github.com/Joseph89155/Credit-Card-Fraud-Detection-using-Scikit-Learn-and-Snap-ML",
  },
  {
    id: 8,
    title: "Loan Approval & Financial Risk Analysis",
    category: "Data Science",
    description:
      "A risk analysis project using Data Science Methodologies to assess loan approval decisions. It explores customer demographics, credit history, income trends, and key factors influencing loan approvals to uncover patterns, assess risk, and determine key factors that influence whether a loan is approved or rejected..",
    techStack: ["Python", "Pandas", "Matplotlib", "Dash"],
    image: RiskImg,
    link: "https://github.com/Joseph89155/Loan-Approval-Financial-Risk-Analysis-Python",
  },
    {
    id: 9,
    title: "Hockey Web Scraper",
    category: "Data Science",
    description:
      "This project is a Python-based web scraper that extracts hockey team statistics from Site. It demonstrates how to automate data gathering using requests, BeautifulSoup, and pandas. The scraper collects structured data from multiple pages using pagination and stores it in a clean DataFrame, which is then exported to a .csv file fo further decision making.",
    techStack: ["Python", "Pandas", "Request", "BeautifulSoup"],
    image: HockeyImg,
    link: "https://github.com/Joseph89155/hockey-webscraper",
  },
  {
    id: 10,
    title: "Air Quality Index (AQI) Analysis",
    category: "Data Science",
    description:
      "A project on global air quality using Python. It explores air pollution trends across countries and cities, identifies top pollutants, and provides insights into the health and environmental impact of poor air quality.",
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
