import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <motion.div
      className="mt-16 px-6 py-12 text-center rounded-lg transition duration-300 
                bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl font-bold">Let's work together!</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Feel free to reach out and let's collaborate.
      </p>
      
      {/* CTA Button */}
      <Link
        to="/contact"
        className="inline-block mt-6 px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300
                   bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400"
      >
        Let's Talk
      </Link>
    </motion.div>
  );
};

export default CTASection;
