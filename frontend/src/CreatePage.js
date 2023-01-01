import React from "react";
import "./CreatePage.css";
import { useState } from "react";

function CreatePage() {
const [factPattern, setFactPattern] = useState("");

// Handle form submission
const handleSubmit = (e) => {
e.preventDefault();
// Connect to Google Sheets API to save the fact pattern to the "Argue_Prompts" document
fetch("/api/saveFactPattern", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ factPattern })
});
};

return (
<div className="CreatePage">
<header className="CreatePage-header">
<h1>LARRP.ai</h1>
</header>
<main>
<p>
Create a new prompt by entering a fact pattern in the form below. The
fact pattern should include information about the parties involved in
the hypothetical legal dispute and the circumstances leading to the
dispute.
</p>
<form onSubmit={handleSubmit}>
<textarea
value={factPattern}
onChange={(e) => setFactPattern(e.target.value)}
/>
<button type="submit">Create</button>
</form>
</main>
</div>
);
}

export default CreatePage;