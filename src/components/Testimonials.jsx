import { motion } from "framer-motion";

const testimonials = [
  { name: "John Doe", feedback: "Amazing work! Highly recommended." },
  { name: "Jane Smith", feedback: "Super professional and talented." },
  { name: "Michael Brown", feedback: "Delivered beyond expectations!" },
];

const Testimonials = () => {
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

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <p className="text-gray-700 dark:text-gray-300 italic">
              "{testimonial.feedback}"
            </p>
            <h3 className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
              {testimonial.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
