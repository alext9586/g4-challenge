import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChallengeHomeContainer from './containers/ChallengeHomeContainer';
import WebServiceChallenge from './containers/WebServiceChallenge';
import JsAppChallenge from './containers/JsAppChallenge';
import './App.css';


class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <a href="/">Challenges Home</a>
          <Route path="/" exact component={ChallengeHomeContainer} />
          <Route path="/JsAppChallenge/" component={JsAppChallenge} />
          <Route path="/WebServiceChallenge/" component={WebServiceChallenge} />
        </div>
      </Router>
    );
  }
}

export default App;
