import React from 'react';
// import './Home.css'; // Optional if you have a separate CSS file

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Social Cookbook</h1>
        <p>Your personal space to save, share, and discover recipes.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features-section">
        <h2>Why You'll Love It</h2>
        <ul>
          <li>📒 Save your favorite recipes</li>
          <li>👩‍🍳 Share your creations with friends</li>
          <li>🔍 Explore new meals from others</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Social Cookbook. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;