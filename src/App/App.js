import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Me from "./Pages/Me";
import Questions from "./Pages/Questions";
import Questionnaire1 from "./Pages/Questionnaires/Questionnaire1";
import Questionnaire2 from "./Pages/Questionnaires/Questionnaire2";
import Questionnaire3 from "./Pages/Questionnaires/Questionnaire3";
import Questionnaire4 from "./Pages/Questionnaires/Questionnaire4";

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
          <Route path="/q1" exact component={Questionnaire1} />
          <Route path="/q2" exact component={Questionnaire2} />
          <Route path="/q3" exact component={Questionnaire3} />
          <Route path="/q4" exact component={Questionnaire4} />
          <Route path="/questions" exact component={Questions}/>
          <Route path="/about" exact component={About} />
          <Route path="/me" exact component={Me} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
