import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import aboutImage from "../assets/about.jpg"; // Replace with your image
import resumePDF from "../assets/resume.pdf"; // Replace with your actual resume
import { skills } from "../data/skills"; // Importing skills data
import Timeline from "../components/Timeline";
import Achievements from "../components/Achievements"; // ✅ Import Achievements Component
import Hobbies from "../components/Hobbies"; // Import Hobbies Component
import CTASection from "../components/CTASection";

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
          Get to know more about my journey, skills, and interests.
        </p>

        {/* 🟢 Split Section: Image + Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
          {/* Image */}
          <motion.img
            src={aboutImage}
            alt="About Me"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Intro Text */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">Who Am I?</h3>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Joseph is a passionate developer with experience in building high-quality web applications. He love working on innovative projects, and my expertise spans from frontend design to backend development, from Data Science to Data Analytics.
            </p>
            {/* Download Resume Button */}
            <a
              href={resumePDF}
              download="My_Resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* 🔹 Skills Section */}
<div className="mt-16">
  <motion.h3
    className="text-3xl font-semibold text-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Skills & Technologies
  </motion.h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
    {Object.keys(skills).map((category, index) => (
      <motion.div
        key={index}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-[0px_0px_15px_#3b82f6]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h4 className="text-xl font-semibold capitalize">{category}</h4>
        <ul className="mt-4 space-y-2">
          {skills[category].map((skill, skillIndex) => (
            <li
              key={skillIndex}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</div>


        {/* Experience & Education Timeline */}
        <Timeline />

        {/* ✅ Achievements & Certifications Section */}
        <Achievements />
        <Hobbies />
        <CTASection />
      </div>
    </div>
  );
};

export default About;