import React, { Component } from 'react';

class ChallengeHomeContainer extends Component {
  componentDidMount() {
    document.title = "G4 Challenges";
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>G4 Challenges</h1>
        <ol>
          <li><a href="/EtlChallenge">ETL Challenge</a></li>
          <li><a href="/WebServiceChallenge">Web Service Challenge</a></li>
          <li><a href="/JsAppChallenge">JS App Challenge</a></li>
          <li><a href="/DesignChallenge">Design Challenge</a></li>
        </ol>
      </div>
    );
  }
}

export default ChallengeHomeContainer;