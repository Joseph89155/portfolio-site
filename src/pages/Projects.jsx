import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import portfolioImg from "../assets/portfolio.jpg";
import expenseImg from "../assets/expense.jpg";
import portfolioImg2 from "../assets/portfolio2.jpg";
import employweImg from "../assets/employwe.jpg";
import inventoryImg from "../assets/inventory.jpg";
import cafeImg from "../assets/cafe.jpg";
import salesImg from "../assets/sales.jpg";
import PowerBIImg from "../assets/powerbi.jpg";
import HospitalityImg from "../assets/hospitality.jpg";
import HrImg from "../assets/HR.jpg";
import TableauImg from "../assets/tableau.jpg";
import MySQLImg from "../assets/mysql.jpg";
import HealthImg from "../assets/health.jpg";
import TitanicImg from "../assets/titanic.jpg";
import CreditcardImg from "../assets/credit.jpg";
import ForecastImg from "../assets/forecast.jpg";
import RiskImg from "../assets/risk.jpg";
import MLOPImg from "../assets/real estate.jpg";
import houseImg from "../assets/House Price.jpg";
import WineImg from "../assets/wine.jpg";
import HockeyImg from "../assets/hockey.jpg";
import NetflixImg from "../assets/netflix.jpg";
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
    title: "Personal expense tracker ",
    category: "Web Dev",
    description:
      "The Personal Expense Tracker is a web application designed to help individuals manage their financial transactions efficiently. This application allows users to create, view, and manage their transactions in one central place. Additionally, users can visualize their spending and income trends through intuitive charts, providing a comprehensive overview of their financial habits.",
    techStack: ["Python", "HTML", "CSS"],
    image: expenseImg,
    link: "https://github.com/Joseph89155/Personal-Expense-Tracker",
  },
  {
    id: 3,
    title: "Portfolio Website 2.0",
    category: "Web Dev",
    description:
      "This is a personal website portfolio in which it has a home page, about page, projects page, experience and contact page.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    image: portfolioImg2,
    link: "https://github.com/Joseph89155/Portfolio-2.0",
  },
  {
    id: 4,
    title: "Employ We",
    category: "Web Dev",
    description:
      "EmployWe is a lightweight, user-friendly desktop application designed to help HR personnel and managers manage employee onboarding seamlessly. It allows you to add, view, search, sort, and export employee records with an intuitive graphical interface.",
    techStack: ["Python"],
    image: employweImg,
    link: "https://github.com/Joseph89155/EmployWe",
  },
  {
    id: 5,
    title: "Inventory System",
    category: "Web Dev",
    description:
      "A modern, user-friendly inventory management system built with React and tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    image: inventoryImg,
    link: "https://github.com/Joseph89155/inventory-system",
  },
  {
    id: 6,
    title: "Cafeteria Management System",
    category: "Web Dev",
    description:
      "This is a simple Cafeteria Management System implemented in C. The system allows users to manage a menu of food items, place orders, and perform administrative tasks such as adding, editing, and deleting food items. The system also includes features to display order summaries, manage a stack of orders for each table, and process orders from a queue.",
    techStack: ["C"],
    image: cafeImg,
    link: "https://github.com/Joseph89155/Cafeteria-System-C",
  },
  {
    id: 7,
    title: "Bike Sales Excel Dashboard",
    category: "Data Analysis",
    description:
      "This project focuses on analyzing bike sales data to uncover key customer insights and sales trends. Using Microsoft Excel, I cleaned the raw data, performed analysis through pivot tables, and created an interactive dashboard. The goal is to provide actionable insights that can help improve marketing strategies and boost future bike sales.",
    techStack: ["Excel", "Dash"],
    image: salesImg,
    link: "https://github.com/Joseph89155/Bike-Sales-Excel-Dashboard",
  },
  {
    id: 8,
    title: "Data Professional Survey Power BI Dashboard",
    category: "Data Analysis",
    description:
      "This project focuses on analyzing survey data collected from data professionals globally. Using Microsoft Power BI, I cleaned the raw dataset, built a relational data model, and created an interactive dashboard. The goal is to uncover key insights about the countries data professionals come from, their job roles, salary trends, career difficulties, preferred programming languages, and work satisfaction levels.",
    techStack: ["Power BI", "Excel", "Dash"],
    image: PowerBIImg,
    link: "https://github.com/Joseph89155/Data-Professional-Survey-Power-BI-Analysis-Project",
  },
  {
    id: 9,
    title: "Hospitality PowerBI Dashboard ",
    category: "Data Analysis",
    description:
      "This project showcases an end-to-end Business Intelligence solution developed using Power BI for the hospitality industry. The dashboard provides deep insights into hotel performance metrics such as Revenue, RevPAR, Occupancy Rate, ADR, and Realisation %, enabling hotel managers and executives to make data-driven decisions.",
    techStack: ["Power BI", "Excel", "Dash"],
    image: HospitalityImg,
    link: "https://github.com/Joseph89155/hospitality-powerbi-dashboard",
  },
  {
    id: 10,
    title: "tableau-hr-dashboard",
    category: "Data Analysis",
    description:
      "This project was built to support HR managers in monitoring workforce trends and performance using a comprehensive Tableau dashboard. It combines summary visualizations with employee-level filtering for data-driven decision-making.",
    techStack: ["Tableau", "Excel", "Dash"],
    image: HrImg,
    link: "https://github.com/Joseph89155/tableau-hr-dashboard",
  },
  {
    id: 11,
    title: "Airbnb Tableau Dashboard",
    category: "Data Analysis",
    description:
      "This Tableau project focuses on analyzing Airbnb listing data to explore price variations, listing distribution, and revenue trends across Seattle. Using Tableau Desktop, I prepared, analyzed, and visualized the data to uncover valuable insights into pricing patterns by bedroom count, geographic location (zipcode), and seasonality throughout the year.",
    techStack: ["Tableau", "Excel", "Dash"],
    image: TableauImg,
    link: "https://github.com/Joseph89155/Airbnb-Tableau-Data-Analysis-Project",
  },
  {
    id: 12,
    title: "Layoffs MySQL Data Cleaning",
    category: "Data Analysis",
    description:
      "This SQL-based data cleaning project focuses on a dataset containing global company layoff records. Using MySQL, I cleaned and transformed raw CSV data to prepare it for accurate and efficient analysis. This is part of a hands-on portfolio series intended to strengthen SQL data wrangling skills for real-world business use cases.",
    techStack: ["MySQL", "Excel"],
    image: MySQLImg,
    link: "https://github.com/Joseph89155/Layoffs-Data-Cleaning-Project-MySQL-",
  },
  {
    id: 13,
    title: "Health Analytics Full Project (SQL, BI, Excel)",
    category: "Data Analysis",
    description:
      "This project focuses on analyzing OCD (Obsessive-Compulsive Disorder) patient data to uncover trends and insights based on gender, ethnicity, obsession/compulsion types, and diagnosis timelines. Using SQL for data cleaning and exploration, the processed data was then visualized in both Power BI and Excel dashboards.",
    techStack: ["MySQL", "BI", "Excel"],
    image: HealthImg,
    link: "https://github.com/Joseph89155/Health-Analytics-Project-SQL-BI-Excel-",
  },
    {
    id: 14,
    title: "Titanic Survival EDA Project",
    category: "Data Analysis",
    description:
      "This project is part of a self-guided data science learning journey to build hands-on skills in EDA. Using the Titanic dataset, we explore how different factors such as age, gender, ticket class, and port of embarkation affected survival chances during the tragic event.",
    techStack: ["Python", "Pandas", "Seaborn"],
    image: TitanicImg,
    link: "https://github.com/Joseph89155/exploratory-data-analysis-titanic",
  },
  {
    id: 15,
    title: "Credit Card Fraud Detection",
    category: "Data Science",
    description:
      "This project demonstrates how machine learning techniques can be applied to detect fraudulent credit card transactions. We explore the use of Decision Tree and Support Vector Machine (SVM) models, with steps covering data preprocessing, exploratory data analysis (EDA), class imbalance handling, model training, evaluation, and interpretation.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Numpy", "Scikit-learn",],
    image: CreditcardImg,
    link: "https://github.com/Joseph89155/Credit-Card-Fraud-Detection-using-Scikit-Learn-and-Snap-ML",
  },
  {
    id: 16,
    title: "Covid-19 Forecasting and Geo Visualization",
    category: "Data Science",
    description:
      "This project demonstrates a basic analysis of Big Data on the global spread of COVID-19. It covers data loading and cleaning, forecasting using linear regression, and creating interactive geo-visualizations of the virus's spread. The primary tool used is a Jupyter Notebook, leveraging Python libraries such as Pandas, NumPy, Scikit-learn, Statsmodels, Seaborn, and Plotly.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Statsmodels", "Seaborn", "Plotly"],
    image: ForecastImg,
    link: "https://github.com/Joseph89155/COVID-19-Forecasting-and-Geo-Visualization",
  },
  {
    id: 17,
    title: "Loan Approval & Financial Risk Analysis",
    category: "Data Science",
    description:
      "A risk analysis project using Data Science Methodologies to assess loan approval decisions. It explores customer demographics, credit history, income trends, and key factors influencing loan approvals to uncover patterns, assess risk, and determine key factors that influence whether a loan is approved or rejected..",
    techStack: ["Python", "Pandas", "Matplotlib", "Dash"],
    image: RiskImg,
    link: "https://github.com/Joseph89155/Loan-Approval-Financial-Risk-Analysis-Python",
  },
  {
    id: 18,
    title: "MLOPs housing price prediction",
    category: "Data Science",
    description:
      "This project showcases an end-to-end machine learning workflow for predicting median housing prices in California. Using the 1990 California census data, we train a regression model that learns patterns from demographic and geographic attributes to predict house values.Built with MLOps principles in mind, the project includes preprocessing, pipeline construction, hyperparameter tuning, model evaluation, and deployment through a simple Flask API.",
    techStack: ["Python", "Pandas", "Matplotlib", "Dash"],
    image: MLOPImg,
    link: "https://github.com/Joseph89155/mlops-housing-price-prediction",
  },
  {
    id: 19,
    title: "House-price-prediction",
    category: "Data Science",
    description:
      "This project demonstrates how to build a simple linear regression model to predict house prices using Python and Scikit-learn. It follows the entire data science workflow—from data loading and exploration, to training, evaluating, and visualizing a model based on house area (square footage). The dataset used contains just two columns: area and price, making it a great entry point into supervised learning.",
    techStack: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    image: houseImg,
    link: "https://github.com/Joseph89155/house-price-prediction",
  },
  {
    id: 20,
    title: "Wine classification",
    category: "Data Science",
    description:
      "This project demonstrates the application of supervised machine learning models to classify wines based on their chemical properties using the Wine dataset from Scikit-learn. The dataset includes 13 features derived from chemical analysis and aims to classify wines into one of three cultivars. We implement, evaluate, and compare the performance of six classification algorithms under similar conditions to determine the most effective model for this task.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Dash"],
    image: WineImg,
    link: "https://github.com/Joseph89155/wine-classification-ml",
  },
  {
    id: 21,
    title: "Hockey Web Scraper",
    category: "Data Science",
    description:
      "This project is a Python-based web scraper that extracts hockey team statistics from Site. It demonstrates how to automate data gathering using requests, BeautifulSoup, and pandas. The scraper collects structured data from multiple pages using pagination and stores it in a clean DataFrame, which is then exported to a .csv file fo further decision making.",
    techStack: ["Python", "Pandas", "Request", "BeautifulSoup"],
    image: HockeyImg,
    link: "https://github.com/Joseph89155/hockey-webscraper",
  },
  {
    id: 22,
    title: "Netflix Data Wrangling",
    category: "Data Science",
    description:
      "The goal of this project is to transform the messy Netflix dataset into a clean, consistent, and analysis-ready format",
    techStack: ["Python", "Pandas", "Request"],
    image: NetflixImg,
    link: "https://github.com/Joseph89155/Netflix-Data-Wrangling",
  },
  {
    id: 23,
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
