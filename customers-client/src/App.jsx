import React, { Component } from 'react';
import WebServiceChallenge from './containers/WebServiceChallenge';
import JsAppChallenge from './containers/JsAppChallenge';
import './App.css';


class App extends Component {
  render() {
    return <JsAppChallenge />;
    //return (<WebServiceChallenge />);
  }
}

export default App;
