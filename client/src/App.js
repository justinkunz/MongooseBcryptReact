import React from "react";
import Home from "./views/Home";
import SignUp from "./Components/SignUp";
import Account from "./views/Account";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/account" component={Account} />
      </Router>
    </div>
  );
}

export default App;
