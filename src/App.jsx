import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyWorks from "./pages/MyWorks";
import AboutMe from "./pages/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContentMe from "./pages/ContentMe";

function App() {
  return (
    <div className="bg-black2-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-works" element={<MyWorks />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/content-me" element={<ContentMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
