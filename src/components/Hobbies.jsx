import { motion } from "framer-motion";
import { hobbies } from "../data/hobbies";

const Hobbies = () => {
  return (
    <div className="mt-16 bg-gray-50 dark:bg-gray-900 py-12 rounded-lg shadow-md">
      <motion.h3
        className="text-3xl font-semibold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Interests & Hobbies
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-6 px-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-4xl text-blue-600 bg-blue-100 dark:bg-gray-700 p-3 rounded-full">
              {hobby.icon}
            </span>
            <p className="mt-3 text-lg font-medium">{hobby.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
