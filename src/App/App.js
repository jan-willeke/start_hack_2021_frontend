import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Me from "./Pages/Me";
import Questions from "./Pages/Questions";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Switch>
          <Route path="/questions" component={Questions}/>
          <Route path="/about" component={About} />
          <Route path="/me" component={Me} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}