import { useState } from "react";
import { motion } from "framer-motion";
import { achievementsData } from "../data/achievements";

const Achievements = () => {
  // State to handle modal visibility
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Function to handle opening modal
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  // Function to handle closing modal
  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="mt-16">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{achievement.description}</p>
            <span className="block mt-3 text-gray-500 dark:text-gray-400 text-sm">{achievement.year}</span>
            
            {/* View Certificate Button */}
            {achievement.certificate && (
              <button
                onClick={() => openModal(achievement.certificate)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Certificate
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal for Certificate View */}
      {selectedCertificate && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 overflow-auto">
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-5xl w-full relative">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-xl"
      >
        ✖
      </button>
      <img
        src={selectedCertificate}
        alt="Certificate"
        className="max-w-full max-h-[80vh] mx-auto rounded-md"
      />
    </div>
  </div>
)}
    </div>
  );
};

export default Achievements;
