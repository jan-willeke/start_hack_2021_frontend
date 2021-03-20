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
          <Route path="/about" component={About} />
          <Route path="/me" component={Me} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
