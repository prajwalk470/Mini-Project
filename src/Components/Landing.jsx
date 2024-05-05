import React from 'react';
import './LandingPage.css'; // Import CSS file for component styling


const LandingPage = () => {
  return (
    <div className="landing-page">
        <nav className="navbar">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="get-started-btn">Get Started</button>
    </nav>
      <header>
        <h1>Welcome to Our Website</h1>
        <p>Where amazing things happen</p>
      </header>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
