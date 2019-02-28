import React, { Component } from 'react';

class ChallengeHomeContainer extends Component {
  render() {
    return (
      <div className="container">
        <h1>Challenges</h1>
        <ul>
          <li><a href="/WebServiceChallenge">Web Service Challenge</a></li>
          <li><a href="/JsAppChallenge">JS App Challenge</a></li>
        </ul>
      </div>
    );
  }
}

export default ChallengeHomeContainer;