import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './Views/Landing';
import Quiz from './Views/Quiz';
import Choice from './Views/Choice';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [answers, setAnswers] = useState({
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path='/quiz/:id'>
            <Quiz answers={answers} setAnswers={setAnswers}/>
          </Route>
          <Route path='/choice'>
            <Choice />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;