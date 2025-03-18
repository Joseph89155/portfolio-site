import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg transition duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
