import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landingpage/LandingPage";
import "./App.css";
import logo from "./Components/Images/no-bg.png"

const App = () => {
  const [view, setView] = useState("home");

  return (
    <div className="app">
      <Navbar />

      {/* Home Section */}
      <div id="home" className="section home-section">
        {view === "home" && (
          <div className="home-content">
            <h1>Welcome to Job-Scraper</h1>
            <p>Find your dream job or internship here.</p>
          </div>
        )}

        {view === "home" && (
          <div className="home-logo">
            <img src={logo} alt="Logo" className="animated-logo" />
          </div>
        )}

        {/* LandingPage handles dynamic view changes */}
        <LandingPage setView={setView} />
      </div>

      {/* Jobs Section */}
      <div id="jobs" className="section">
        <h1>Jobs</h1>
        <p>Explore the latest job opportunities!</p>
      </div>

      {/* Internships Section */}
      <div id="internships" className="section">
        <h1>Internships</h1>
        <p>Discover exciting internships to kickstart your career.</p>
      </div>

      {/* About Us Section */}
      <div id="about" className="section">
        <h1>About Us</h1>
        <p>Learn more about our mission and values.</p>
      </div>
    </div>
  );
};

export default App;