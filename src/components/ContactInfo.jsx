import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
  const hours = [
    { day: "Mon-Fri", time: "9 AM - 6 PM" },
    { day: "Sat-Sun", time: "Closed" },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg space-y-4">
      <h2 className="text-2xl font-semibold">Get in Touch</h2>
      <p>For inquiries, collaborations, or feedback, reach out using the form or contact details below.</p>

      <div className="flex space-x-4">
        <FaFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
        <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
        <FaLinkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
      </div>

      <h3 className="text-lg font-semibold mt-4">Operating Hours</h3>
      <ul className="space-y-2">
        {hours.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.day}</span>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactInfo;
