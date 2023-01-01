import React from "react";
import "./ArguePage.css";
import { useState } from "react";
import { useEffect } from "react";

function ArguePage() {
  const [prompt, setPrompt] = useState("");
  const [argument, setArgument] = useState("");

  // Connect to Google Sheets API to retrieve a prompt from the "Argue_Prompts" document
  useEffect(() => {
    async function getPrompt() {
      const res = await fetch("/api/getPrompt");
      const data = await res.json();
      setPrompt(data.prompt);
    }
    getPrompt();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect to Google Sheets API to save the argument to the appropriate cell in the "Argue_Prompts" document
    fetch("/api/saveArgument", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ argument })
    });
  };

  return (
    <div className="ArguePage">
      <header className="ArguePage-header">
        <h1>LARRP.ai</h1>
      </header>
      <main>
        <p>Prompt: {prompt}</p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default ArguePage;
