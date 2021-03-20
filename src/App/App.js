import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Me from "./Pages/Me";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
