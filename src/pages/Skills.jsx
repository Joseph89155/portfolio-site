import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.h2 
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Technologies I work with to build amazing projects.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold capitalize mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md flex items-center gap-3 cursor-pointer hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
