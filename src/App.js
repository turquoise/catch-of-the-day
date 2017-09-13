import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Store from './components/Store';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <div className="App" >
          <Route exact path="/" component={Store} />
          <Route path="/store/:storeId" component={StorePicker} />
          <Route path="/*" component={NotFound} />
        </div>
      </Router>
    );
  }
}

export default App;
