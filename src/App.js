import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen"> {/* Ensures footer stays at the bottom */}
        <main className="flex-grow pt-20"> {/* Prevents content from hiding under navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
