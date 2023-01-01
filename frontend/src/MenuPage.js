import React from "react";
import "./MenuPage.css";

function MenuPage() {
  return (
    <div className="MenuPage">
      <header className="MenuPage-header">
        <h1>LARRP.ai</h1>
      </header>
      <main>
        <p>
          Welcome to LARRP.ai, where you can practice your legal argument skills
          against imaginary prompts involving robots injuring plaintiffs.
        </p>
        <p>What would you like to do?</p>
        <button>Argue a Prompt</button>
        <button>Create a Prompt</button>
      </main>
    </div>
  );
}
export default MenuPage;
