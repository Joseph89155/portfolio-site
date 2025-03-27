import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";

const Timeline = () => {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-semibold text-center mb-6">Experience & Education</h3>

      <div className="relative border-l-4 border-blue-600 ml-6">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 ml-6 pl-6 pb-4 border-l border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h4 className="text-xl font-bold">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-400">{item.company} | {item.year}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
