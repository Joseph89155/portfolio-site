import React, { useState } from "react";

const faqs = [
  { question: "How can I contact you?", answer: "Use the contact form or the provided details." },
  { question: "Do you offer consultations?", answer: "Yes, feel free to reach out to discuss your needs." },
  { question: "Are you open to collaborations?", answer: "Absolutely! I'm always excited to collaborate." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg space-y-4">
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b dark:border-gray-700">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-4 focus:outline-none"
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <p className="p-4 bg-gray-200 dark:bg-gray-700">{faq.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
