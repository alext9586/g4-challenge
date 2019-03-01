import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChallengeHomeContainer from './containers/ChallengeHomeContainer';
import EtlChallengeContainer from './containers/EtlChallengeContainer';
import WebServiceChallenge from './containers/WebServiceChallenge';
import JsAppChallenge from './containers/JsAppChallenge';
import DesignChallengeContainer from './containers/DesignChallengeContainer';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <a href="/">Challenges Home</a>
          <Route path="/" exact component={ChallengeHomeContainer} />
          <Route path="/EtlChallenge/" component={EtlChallengeContainer} />
          <Route path="/JsAppChallenge/" component={JsAppChallenge} />
          <Route path="/WebServiceChallenge/" component={WebServiceChallenge} />
          <Route path="/DesignChallenge/" component={DesignChallengeContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
