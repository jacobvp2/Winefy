import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './Views/Landing';
import Quiz from './Views/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [answers, setAnswers] = useState({
    '1': 'A',
    '2': 'A',
    '3': 'A',
    '4': 'A',
    '5': 'A',
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Landing />
          </Route>
          <Route path='/quiz/:id'>
              <Quiz/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;