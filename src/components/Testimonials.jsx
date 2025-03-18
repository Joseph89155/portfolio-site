import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center text-center py-24 px-6 
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Showcasing my journey in <span className="font-semibold">Programming</span>,{" "}
          <span className="font-semibold">Data Science</span>, and{" "}
          <span className="font-semibold">Data Analysis</span>.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.section>

      {/* "What I Do" Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto my-16 px-6 bg-gray-100 dark:bg-gray-900 py-12 rounded-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Programming", "Data Science", "Data Analysis"].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}  // Start hidden and below
              whileInView={{ opacity: 1, y: 0 }}  // Slide up into view
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {title === "Programming" && "Building efficient, scalable applications with modern frameworks."}
                {title === "Data Science" && "Using AI and machine learning to analyze and interpret data."}
                {title === "Data Analysis" && "Extracting insights and trends to drive data-driven decisions."}
              </p>
              <Link
                to="/projects"
                className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white 
                           font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Learn More 
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="container mx-auto my-16 px-6 bg-gray-100 dark:bg-gray-900 py-12 rounded-lg">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
