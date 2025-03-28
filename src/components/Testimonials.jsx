import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing work! Highly recommended.",
    rating: 5,
    avatar: "https://source.unsplash.com/50x50/?portrait",
  },
  {
    name: "Jane Smith",
    feedback: "Super professional and talented.",
    rating: 4,
    avatar: "https://source.unsplash.com/50x50/?woman",
  },
  {
    name: "Michael Brown",
    feedback: "Delivered beyond expectations!",
    rating: 5,
    avatar: "https://source.unsplash.com/50x50/?man",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide controls
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container mx-auto my-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        What People Say
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative max-w-lg mx-auto">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.feedback}"
                </p>
                <h3 className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
                  {testimonial.name}
                </h3>
                {/* Star Ratings */}
                <div className="flex justify-center mt-3">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className={`${
                        starIndex < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevTestimonial}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Prev
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
