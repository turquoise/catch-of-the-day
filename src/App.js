import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Store from './components/Store';
import StorePicker from './components/StorePicker';
//import NotFound from './components/NotFound';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App" >
          <StorePicker />
        </div>
      </Router>
    );
  }
}

export default App;
