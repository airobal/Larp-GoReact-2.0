import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TermsPage from "./TermsPage";
import MenuPage from "./MenuPage";
import ArguePage from "./ArguePage";
import CreatePage from "./CreatePage";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/home" component={HomePage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/argue" component={ArguePage} />
        <Route path="/create" component={CreatePage} />
      </Router>
    </div>
  );
}

export default App;
