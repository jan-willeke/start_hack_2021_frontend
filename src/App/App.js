import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Questionnaire from "./Pages/Questionnaire";
import Options from "./Pages/Options";


import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Switch>
          <Route path="/options" exact component={Options}/>
          <Route path="/about" exact component={About} />
          <Route path="/me" exact component={Questionnaire} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
