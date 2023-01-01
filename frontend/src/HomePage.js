import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <h1>LARRP.ai</h1>
      </header>
      <main>
        <p>Welcome to LARRP.ai, a place to practice your legal argument skills against imaginary prompts involving robots injuring plaintiffs.</p>
        <p>Our app was created to help legal professionals and students improve their skills and stay up-to-date with the latest developments in the field. With our app, you can argue prompts in a variety of legal areas, or create your own prompts to share with others.</p>
        <p>Our roadmap includes plans to expand the range of legal areas covered by our app, as well as to add new features and functionality. We hope you'll join us on this journey and help us make LARRP.ai the best place to practice legal argument skills online.</p>
        <button>Start</button>
      </main>
    </div>
  );
}

export default HomePage;
