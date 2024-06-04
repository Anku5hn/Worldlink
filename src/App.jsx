import React from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import GetInTouch from "./pages/GetInTouch.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
