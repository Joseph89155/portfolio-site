import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const testimonials = [
  { name: "John Doe", feedback: "Amazing experience! Highly recommend." },
  { name: "Jane Smith", feedback: "Professional and efficient. Will collaborate again!" },
  { name: "Alex Johnson", feedback: "Impressed with the quality and dedication." },
];

const faqs = [
  { question: "How can I contact you?", answer: "Use the contact form or the provided details." },
  { question: "Do you offer consultations?", answer: "Yes, feel free to reach out to discuss your needs." },
  { question: "Are you open to collaborations?", answer: "Absolutely! I'm always excited to collaborate." },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: "",
  });

  const [activeFAQ, setActiveFAQ] = useState(null);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      reason: "",
    });
  };

  // Toggle FAQ accordion
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 transition duration-300 bg-light-gradient dark:bg-dark-gradient">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-customLight w-full max-w-4xl grid md:grid-cols-2 gap-8">
        
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-custom rounded-lg shadow-customLight focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <div className="flex space-x-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 p-custom rounded-lg shadow-customLight focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 p-custom rounded-lg shadow-customLight focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Dropdown for Reason */}
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="p-custom rounded-lg shadow-customLight focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Reason for Contact</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="p-custom rounded-lg shadow-customLight focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-custom rounded-lg font-semibold shadow-customLight transform hover:scale-105 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            For questions, technical assistance, or collaboration opportunities, reach out through the contact information provided.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
              <FaPhoneAlt className="text-indigo-600 dark:text-teal-400" />
              <span>+123-456-7890</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
              <FaEnvelope className="text-indigo-600 dark:text-teal-400" />
              <span>hello@example.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
              <FaMapMarkerAlt className="text-indigo-600 dark:text-teal-400" />
              <span>123 Anywhere St., Any City, ST 12345</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
            <FaLinkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-10 space-y-4 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold">What People Say</h2>
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <p>{t.feedback}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">- {t.name}</span>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-10 space-y-4 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <button onClick={() => toggleFAQ(index)} className="w-full text-left p-4">
              {faq.question}
            </button>
            {activeFAQ === index && (
              <p className="p-4 bg-gray-200 dark:bg-gray-700 rounded-md">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
