import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* future routes */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
